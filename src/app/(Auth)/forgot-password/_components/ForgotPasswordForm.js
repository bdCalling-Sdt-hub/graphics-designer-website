"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import { setToSessionStorage } from "@/utils/sessionStorage";
import { SuccessToast } from "@/utils/toastHook";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await forgotPassword(data).unwrap();

      if (res?.success) {
        SuccessToast("Check your email for an OTP");

        // Set forgetPasswordToken in session storage
        setToSessionStorage("forgetPasswordToken", res?.data?.token);

        // Navigate to otp verification page
        router.push("/verify-otp");
      }
    } catch (error) {
      ErrorModal(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[85%] 2xl:w-3/4">
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
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
          className="rounded-2xl border border-primary-black/75 bg-transparent text-primary-black outline-none"
        />
        {errors.email && <p className="text-danger">Email is required</p>}
      </div>

      <Button
        disabled={isLoading}
        className="mt-6 h-[2.5rem] w-full rounded-2xl bg-primary-green text-center shadow-none"
      >
        Submit {isLoading && <Loader className="ml-2 animate-spin" size={20} />}
      </Button>
    </form>
  );
}
