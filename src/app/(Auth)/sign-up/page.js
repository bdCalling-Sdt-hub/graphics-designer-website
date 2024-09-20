import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/auth/logo.svg";
import SignUpForm from "./_components/SignUpForm";

export const metadata = {
  title: "Sign Up",
  description: "This is the sign up page of Grafismo Digital.",
};

export default function page() {
  return (
    <div className="w-full rounded-xl border bg-white pb-10 shadow lg:mx-auto lg:block lg:w-[50%] lg:px-0 2xl:w-[40%]">
      <Link href="/" className="mx-auto block w-[20%]">
        <Image src={logo} alt="logo" className="mx-auto block w-full" />
      </Link>
      {/* form */}
      <div className="mt-10 px-8">
        <SignUpForm />
      </div>
    </div>
  );
}
