"use client";

import Image from "next/image";
import "./Navbar.css";
import logo from "/public/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { Shirt } from "lucide-react";
import { History } from "lucide-react";
import { LogOut } from "lucide-react";
import AnimateTextOnHover from "@/components/AnimateTextOnHover/AnimateTextOnHover";
import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import { useRouter } from "next/navigation";
import { MessageSquareText } from "lucide-react";
import { useSelector } from "react-redux";
import { logout, selectUser } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { SuccessModal } from "@/utils/modalHook";
import { Settings } from "lucide-react";
import { useGetProfileQuery } from "@/redux/features/user/userApi";

// Links
const LINKS = [
  {
    key: "home",
    label: "Home",
    route: "/home",
  },

  {
    key: "skills",
    label: "Skills",
    route: "/#skills",
  },
  {
    key: "designs",
    label: "Designs",
    route: "/#designs",
  },
  {
    key: "about",
    label: "About",
    route: "/#about",
  },
  {
    key: "faq",
    label: "FAQ",
    route: "/#faq",
  },
];

export default function Navbar() {
  const { data: profileRes } = useGetProfileQuery();
  const profile = profileRes?.data || {};
  const user = useSelector(selectUser);
  const userId = user?._id;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    SuccessModal("Logout Successful");
    router.refresh();
  };

  return (
    <header className="z-[9999] mt-3 w-full">
      {/* -------------- Desktop Version ------------- */}
      <div className="flex-center-between container">
        {/* Left ----- Logo */}
        <Link href="/" className="w-[13%]">
          <Image src={logo} alt="Logo" className="" />
        </Link>

        {/* Center ------ Links */}
        <div className="flex flex-grow items-center justify-center gap-x-10">
          {LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.route}
              className="font-medium text-primary-black"
            >
              <AnimateTextOnHover path={link.route}>
                {link.label}
              </AnimateTextOnHover>
            </Link>
          ))}
        </div>

        {/* Right -------- User sign up */}
        <div className="flex w-[20%] items-center justify-end">
          {userId ? (
            <div className="flex items-center gap-x-6">
              {/* <Link
                href="/notifications"
                className="relative"
                title="notifications"
              >
                <Bell size={24} />
                <Badge className="flex-center absolute -right-2 -top-2 h-5 w-2 rounded-full bg-red-600 text-xs">
                  4
                </Badge>
              </Link> */}

              <Link href="/chat" className="relative" title="Chat">
                <MessageSquareText size={24} />
                <Badge className="flex-center absolute -right-2 -top-2 h-5 w-2 rounded-full bg-red-600 text-xs">
                  2
                </Badge>
              </Link>

              {/* ---------- User profile --------------- */}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none outline-none ring-0">
                    <Avatar className="h-11 w-11">
                      <AvatarImage src={profile?.image} />
                      <AvatarFallback className="bg-primary-green font-semibold text-primary-white">
                        {profile?.name?.split(" ").map((name) => name[0])}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="space-y-1 rounded-xl p-3 font-medium lg:mr-20">
                    <DropdownMenuItem asChild>
                      <Link href="/user/profile">
                        <User size={20} strokeWidth={1.5} className="mr-2" />
                        Profile Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/user/settings">
                        <Settings
                          size={20}
                          strokeWidth={1.5}
                          className="mr-2"
                        />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut size={20} strokeWidth={1.5} className="mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ) : (
            <Button
              size="lg"
              className="hover-bubble h-12 rounded-xl border-2 bg-transparent px-10 font-medium shadow-none hover:bg-transparent"
              asChild
            >
              <Link href="/login" className="flex-center group gap-x-2">
                Sign In
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
