import Image from "next/image";
import Link from "next/link";
import loginGraphic from "/public/images/auth/login.png";
import logo from "/public/images/auth/logo.svg";
import LoginForm from "./_components/LoginForm";

export const metadata = {
  title: "Login",
  description: "This is the login page of Grafismo Digital.",
};

export default function LoginPage() {
  return (
    <div className="flex-center container flex-col gap-y-8 lg:flex-row">
      {/* left */}
      <div className="w-full lg:w-1/2">
        <Image
          src={loginGraphic}
          alt="login graphic"
          className="mx-auto block w-full lg:w-[70%]"
        />
      </div>

      {/* right */}
      <div className="w-full text-primary-black lg:w-1/2">
        <Link href="/" className="mx-auto block w-max">
          <Image src={logo} alt="logo" className="" />
        </Link>

        <p className="mb-12 mt-6 text-center text-2xl font-medium">
          Great to have you back!
        </p>

        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
