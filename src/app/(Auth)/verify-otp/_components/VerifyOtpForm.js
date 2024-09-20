"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyOtpMutation } from "@/redux/features/auth/authApi";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import {
  getFromSessionStorage,
  removeFromSessionStorage,
  setToSessionStorage,
} from "@/utils/sessionStorage";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerifyOtpForm() {
  const [value, setValue] = useState("");
  const [showRequired, setShowRequired] = useState(false);
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const router = useRouter();

  const handleVerifyOtp = async () => {
    if (value?.length < 6) {
      setShowRequired(true);
      return;
    }

    setShowRequired(false);

    try {
      const res = await verifyOtp({ otp: value }).unwrap();

      if (res?.success) {
        SuccessModal("Otp verified successfully");

        // If forgetPasswordToken exists, navigate to change password page
        if (getFromSessionStorage("forgetPasswordToken")) {
          // Remove forgetPasswordToken from session storage
          removeFromSessionStorage("forgetPasswordToken");

          // Set token for change password
          setToSessionStorage("changePasswordToken", res?.data?.token);

          return router.push("/change-password");
        }

        // Remove signUpToken from session storage
        removeFromSessionStorage("signUpToken");

        // Navigate to login page
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      ErrorModal(error?.data?.message);
    }
  };

  return (
    <div>
      <div className="mx-auto w-max">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="flex items-center gap-x-5">
            <InputOTPSlot
              index={0}
              className="h-[63px] w-[50px] rounded-xl border border-primary-black/75 text-3xl font-bold"
            />
            <InputOTPSlot
              index={1}
              className="h-[63px] w-[50px] rounded-xl border border-primary-black/75 text-3xl font-bold"
            />
            <InputOTPSlot
              index={2}
              className="h-[63px] w-[50px] rounded-xl border border-primary-black/75 text-3xl font-bold"
            />
            <InputOTPSlot
              index={3}
              className="h-[63px] w-[50px] rounded-xl border border-primary-black/75 text-3xl font-bold"
            />
            <InputOTPSlot
              index={4}
              className="h-[63px] w-[50px] rounded-xl border border-primary-black/75 text-3xl font-bold"
            />
            <InputOTPSlot
              index={5}
              className="h-[63px] w-[50px] rounded-xl border border-primary-black/75 text-3xl font-bold"
            />
          </InputOTPGroup>
        </InputOTP>

        {showRequired && (
          <p className="mt-3 text-center text-danger">
            Please enter your one-time password correctly
          </p>
        )}
      </div>

      <Button
        disabled={isLoading}
        type="submit"
        className="mt-8 h-[2.7rem] w-full rounded-2xl border bg-primary-green font-medium capitalize text-primary-white shadow-none"
        onClick={handleVerifyOtp}
      >
        Submit {isLoading && <Loader className="ml-2 animate-spin" size={20} />}
      </Button>
    </div>
  );
}
