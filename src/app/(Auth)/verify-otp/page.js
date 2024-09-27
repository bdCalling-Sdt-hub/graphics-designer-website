import Image from "next/image";
import verifyGraphic from "/public/images/auth/otp.png";
import VerifyOtpForm from "./_components/VerifyOtpForm";

export const metadata = {
  title: "Verify OTP",
  description: "Verify OTP page of Grafismo Digital.",
};

export default function VerifyOtpPage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:px-0">
      <div className="lg:w-1/2">
        <Image
          src={verifyGraphic}
          alt="verify otp graphic"
          className="mx-auto block"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="mb-3 text-4xl font-semibold">Verify OTP</h2>
        <p className="mb-10 text-primary-black">
          We&apos;ll send a verification code to your email. Check your inbox
          and enter the code here:
        </p>

        <VerifyOtpForm />
      </div>
    </div>
  );
}
