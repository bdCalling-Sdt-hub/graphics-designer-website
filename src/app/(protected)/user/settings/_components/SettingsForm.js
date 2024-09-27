"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import EyeIconInverse from "@/components/EyeIconInverse/EyeIconInverse";
import { useState } from "react";
import "../../UserDashboard.css";
import { useChangePasswordMutation } from "@/redux/features/user/userApi";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import { Loader } from "lucide-react";

export default function SettingsForm() {
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await changePassword(data).unwrap();

      if (res?.success) {
        SuccessModal("Password changed successfully");

        reset();
      }
    } catch (error) {
      ErrorModal(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="dashboard-colored-title mb-8">Change Password: </h4>
      <div className="space-y-6">
        {/* current password */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="oldPassword"
            className="mb-1 font-semibold text-primary-black"
          >
            Enter Old Password
          </Label>

          <div className="relative">
            <Input
              type={showCurrentPass ? "text" : "password"}
              id="oldPassword"
              placeholder="********"
              {...register("oldPassword", {
                required: "New Password is required",
              })}
              className="h-[2.5rem] rounded-2xl border border-primary-black bg-transparent text-primary-black outline-none"
            />

            <EyeIconInverse
              showPassword={showCurrentPass}
              setShowPassword={setShowCurrentPass}
            />
          </div>

          {errors.oldPassword && (
            <p className="mt-1 text-danger">{errors.oldPassword.message}</p>
          )}
        </div>

        {/* new password */}
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
              placeholder="********"
              {...register("newPassword", {
                required: "New Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must have at least one uppercase, one lowercase letter, one number, one special character and 8 characters long",
                },
              })}
              className="h-[2.5rem] rounded-2xl border border-primary-black bg-transparent text-primary-black outline-none"
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

        {/* confirm password */}
        <div className="grid w-full items-center gap-1.5">
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
              placeholder="********"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("newPassword") || "Passwords do not match",
              })}
              className="h-[2.5rem] rounded-2xl border border-primary-black bg-transparent text-primary-black outline-none"
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
      </div>

      <Button
        disabled={isLoading}
        className="mt-8 h-[2.5rem] w-full rounded-2xl bg-primary-green"
      >
        Submit {isLoading && <Loader className="ml-2 animate-spin" size={18} />}
      </Button>
    </form>
  );
}
