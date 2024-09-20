import Image from "next/image";
import forgotGraphic from "/public/images/auth/forgot password.png";
import ForgotPasswordForm from "./_components/ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password",
  description: "Forgot password page of Grafismo Digital.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:px-0">
      <div className="lg:w-1/2">
        <Image
          src={forgotGraphic}
          alt="forgot password graphic"
          className="mx-auto block"
        />
      </div>

      <div className="lg:w-1/2">
        <h2 className="mb-3 text-4xl font-semibold">Forgot Password?</h2>
        <p className="mb-10 text-primary-black">
          Enter your details below to request an OTP for account password reset.
        </p>

        <ForgotPasswordForm />
      </div>
    </div>
  );
}
