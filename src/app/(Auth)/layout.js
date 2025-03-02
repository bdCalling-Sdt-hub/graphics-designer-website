import Image from "next/image";
import "./auth.css";
import authBg from "/public/images/auth/auth -background.jpg";

export default function layout({ children }) {
  return (
    <div className="mt-20 pb-20">
      {/* Background image */}
      <Image
        src={authBg}
        alt="background image"
        className="absolute inset-0 -z-[999] h-[160vh] w-full sm:h-[170vh] lg:h-[120vh]"
      />

      <div className="min-h-[120vh]">{children}</div>
    </div>
  );
}
