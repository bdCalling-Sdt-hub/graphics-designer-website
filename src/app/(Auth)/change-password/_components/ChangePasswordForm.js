"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import EyeIconInverse from "@/components/EyeIconInverse/EyeIconInverse";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import { useRouter } from "next/navigation";
import { removeFromSessionStorage } from "@/utils/sessionStorage";

export default function ChangePasswordForm() {
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [changePassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await changePassword(data).unwrap();

      if (res?.success) {
        SuccessModal(
          "Password changed successfully",
          "Please login with new password",
        );

        // Remove change password token
        removeFromSessionStorage("changePassToken");

        // Navigate to login page
        router.push("/login");
      }
    } catch (error) {
      ErrorModal(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="newPassword"
          className="mb-1 font-semibold text-primary-black"
        >
          Enter New Password
        </Label>

        <div className="relative">
          <Input
            type={showNewPass ? "text" : "password"}
            id="newPassword"
            placeholder="New Password"
            {...register("newPassword", {
              required: "New Password is required",
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
            showPassword={showNewPass}
            setShowPassword={setShowNewPass}
          />
        </div>

        {errors.newPassword && (
          <p className="mt-1 text-danger">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="mt-10 grid w-full items-center gap-1.5">
        <Label
          htmlFor="confirmPassword"
          className="mb-1 font-semibold text-primary-black"
        >
          Confirm Password
        </Label>

        <div className="relative">
          <Input
            type={showConfirmPass ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("newPassword") || "Passwords do not match",
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

      <Button
        disabled={isLoading}
        className="mt-10 h-[2.7rem] w-full rounded-2xl bg-primary-green text-center"
      >
        Submit {isLoading && <Loader className="ml-2 animate-spin" size={16} />}
      </Button>
    </form>
  );
}
