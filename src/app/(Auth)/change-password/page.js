import Image from "next/image";
import changePassGraphic from "/public/images/auth/change password.png";
import ChangePasswordForm from "./_components/ChangePasswordForm";

export const metadata = {
  title: "Change Password",
  description: "Change Password page",
};

export default function ChangePasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 px-4 py-24 lg:mx-auto lg:w-[75%] lg:flex-row lg:px-0">
      <div className="lg:w-1/2">
        <Image
          src={changePassGraphic}
          alt="change password graphic"
          className="mx-auto block"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="mb-10 text-4xl font-semibold">Change Password</h2>
        <ChangePasswordForm />
      </div>
    </div>
  );
}
