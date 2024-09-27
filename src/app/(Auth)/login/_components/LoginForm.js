"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import EyeIconInverse from "@/components/EyeIconInverse/EyeIconInverse";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useSignInMutation } from "@/redux/features/auth/authApi";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await signIn(data).unwrap();

      if (res?.success) {
        SuccessModal("Login Successful");

        // Set accessToken in store
        dispatch(
          setUser({ user: res?.data?.user, token: res?.data?.accessToken }),
        );

        // Navigate to dashboard
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      ErrorModal(error?.data?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-primary-black lg:mx-auto lg:w-[75%]"
    >
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="name" className="font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="rounded-2xl border-primary-black/75 bg-transparent px-4 py-5"
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(value)) {
                return "Must be a valid email";
              }
              return true;
            },
          })}
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>

      <div className="mt-8 grid w-full items-center gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="font-semibold">
            Password
          </Label>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary-black"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="rounded-2xl border-primary-black/75 bg-transparent px-4 py-5"
            {...register("password", { required: true })}
          />
          <EyeIconInverse
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>

        {errors.password && (
          <span className={"text-danger"}>Password is required</span>
        )}
      </div>

      <Button
        loading={isLoading}
        disabled={isLoading}
        type="submit"
        className="mt-8 h-[2.7rem] w-full rounded-2xl border bg-primary-green font-medium capitalize shadow-none"
      >
        SIGN IN{" "}
        {isLoading && <Loader className="ml-2 animate-spin" size={18} />}
      </Button>

      <div className="mt-3 flex items-center justify-center gap-2">
        <p>Don&apos;t have an account?</p>
        <Link href="/sign-up" className="font-medium text-primary-green">
          Create Account
        </Link>
      </div>
    </form>
  );
}
