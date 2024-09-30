"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import EyeIconInverse from "@/components/EyeIconInverse/EyeIconInverse";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { PhoneInput } from "@/components/PhoneInput/PhoneInput";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import { useRouter } from "next/navigation";
import { setToSessionStorage } from "@/utils/sessionStorage";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [signUp, { isLoading }] = useSignUpMutation();
  const router = useRouter();

  const onSubmit = async (data) => {
    // delete non-used data
    delete data["confirmPassword"];

    try {
      const res = await signUp(data).unwrap();

      if (res?.success) {
        SuccessModal(
          "Account created successfully",
          "Please check email for otp verification",
        );

        // Set signUpToken in session storage
        setToSessionStorage("signUpToken", res?.data?.otpToken?.token);

        // Navigate to otp verification page
        router.push("/verify-otp");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      ErrorModal(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="space-y-8">
        {/* Full name */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="name"
            className="mb-1 block font-semibold text-primary-black"
          >
            Full Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your full name"
            {...register("name", { required: true })}
            className="rounded-2xl border border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-danger">Full Name is required</p>
          )}
        </div>

        {/* phone number */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="phoneNumber"
            className="mb-1 block font-semibold text-primary-black"
          >
            Phone Number
          </Label>
          <Controller
            name="phoneNumber"
            rules={{ required: "Phone number is required" }}
            control={control}
            render={({ field }) => (
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                international
                defaultCountry="US"
              />
            )}
          />

          {errors.phoneNumber && (
            <p className="mt-1 text-danger">Phone Number is required</p>
          )}
        </div>

        {/* email */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="email"
            className="mb-1 block font-semibold text-primary-black"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
            })}
            className="rounded-2xl border border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-danger">Email is required</p>
          )}
        </div>

        {/* new password */}
        <div className="mt-6 grid w-full items-center gap-2">
          <Label
            htmlFor="newPassword"
            className="font-semibold text-primary-black"
          >
            Password
          </Label>

          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must have at least one uppercase, one lowercase letter, one number, one special character and 8 characters long",
                },
              })}
              className="rounded-2xl border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none"
            />

            <EyeIconInverse
              showPassword={showPass}
              setShowPassword={setShowPass}
            />
          </div>

          {errors.password && (
            <p className="mt-1 text-danger">{errors.password.message}</p>
          )}
        </div>

        {/* confirm password */}
        <div className="mt-6 grid w-full items-center gap-2">
          <Label
            htmlFor="confirmPassword"
            className="font-semibold text-primary-black"
          >
            Confirm Password
          </Label>

          <div className="relative">
            <Input
              type={showConfirmPass ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="rounded-2xl border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none"
            />
            <EyeIconInverse
              showPassword={showConfirmPass}
              setShowPassword={setShowConfirmPass}
            />
          </div>

          {errors.confirmPassword && (
            <p className="mt-1 text-danger">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* email */}
        <div className="grid w-full items-center gap-2">
          <Label
            htmlFor="address"
            className="mb-1 block font-semibold text-primary-black"
          >
            Address
          </Label>
          <Input
            type="text"
            id="address"
            placeholder="Enter your address"
            {...register("address", {
              required: true,
            })}
            className="rounded-2xl border border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none"
          />
          {errors.address && (
            <p className="mt-1 text-danger">Address is required</p>
          )}
        </div>
      </div>

      <Button
        loading={isLoading}
        disabled={isLoading}
        type="submit"
        className="mt-8 h-[2.7rem] w-full rounded-2xl bg-primary-green font-semibold text-primary-white hover:bg-primary-green"
      >
        Create Account{" "}
        {isLoading && <Loader className="ml-2 animate-spin" size={16} />}
      </Button>

      <div className="mt-5 flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Link href="/login" className="font-medium text-primary-green">
          Sign In
        </Link>
      </div>
    </form>
  );
}
