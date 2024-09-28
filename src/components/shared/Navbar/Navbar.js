"use client";

import Image from "next/image";
import "./Navbar.css";
import logo from "/public/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { LogOut } from "lucide-react";
import AnimateTextOnHover from "@/components/AnimateTextOnHover/AnimateTextOnHover";
import { usePathname, useRouter } from "next/navigation";
import { MessageSquareText } from "lucide-react";
import { useSelector } from "react-redux";
import { logout, selectUser } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { SuccessModal } from "@/utils/modalHook";
import { Settings } from "lucide-react";
import { useGetProfileQuery } from "@/redux/features/user/userApi";
import { useSocket } from "@/context/SocketContextApi";
import { useEffect, useState } from "react";
import { showImage } from "@/utils/fileHelper";
import { Menu } from "lucide-react";
import MobileSidebar from "./Components/MobileSidebar";

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
    label: "My Designs",
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
  const { socket, chatIdFromSocket } = useSocket();
  const [unreadNotification, setUnreadNotification] = useState([]);
  const pathname = usePathname();
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    SuccessModal("Logout Successful");
    router.refresh();
  };

  // Handle socket notification logics
  useEffect(() => {
    if (socket && userId && chatIdFromSocket) {
      socket.on(`new-message::${chatIdFromSocket}`, (res) => {
        if (res?.sender !== userId) {
          setUnreadNotification([...unreadNotification, res]);
        }
      });
    }

    return () => {
      socket?.off(`new-message::${chatIdFromSocket}}`, (res) => {
        if (res?.sender !== userId) {
          setUnreadNotification([...unreadNotification, res]);
        }
      });
    };
  }, [socket, userId, chatIdFromSocket, unreadNotification]);

  useEffect(() => {
    if (pathname === "/chat" && unreadNotification?.length > 0) {
      setUnreadNotification([]);
    }
  }, [pathname, unreadNotification]);

  return (
    <header className="z-[9999] mt-3 w-full">
      {/* ============ Desktop Version ============ */}
      <div className="container hidden items-center justify-between lg:flex">
        {/* Left ----- Logo */}
        <Link href="/" className="">
          <Image
            src={logo}
            alt="Logo"
            className="size-[150px]"
            height={100}
            width={100}
          />
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
              <Link href="/chat" className="relative" title="Chat">
                <MessageSquareText size={24} />
                {unreadNotification?.length > 0 && (
                  <div className="flex-center ping absolute -right-2 -top-2 h-5 w-5 rounded-full bg-red-600 text-xs font-semibold text-white">
                    {unreadNotification?.length > 9
                      ? "9+"
                      : unreadNotification?.length}
                  </div>
                )}
              </Link>

              {/* ---------- User profile --------------- */}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-none outline-none ring-0">
                    <Avatar className="h-11 w-11">
                      <AvatarImage src={showImage(profile?.image)} />
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

      {/* =========== Mobile Version ============ */}
      <div className="mx-auto flex w-[90%] items-center justify-between lg:hidden">
        {/* left */}
        <Image
          src={logo}
          alt="logo"
          height={1200}
          width={1200}
          className="~size-36/40"
        />

        {/* right */}
        <button onClick={() => setShowMobileSidebar(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.3em"
            height="2.3em"
            viewBox="0 0 26 26"
            className="-scale-x-100 hover:text-muted-foreground"
          >
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
              <path d="M5 11a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></path>
              <path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></path>
            </g>
          </svg>
        </button>

        <MobileSidebar
          open={showMobileSidebar}
          setOpen={setShowMobileSidebar}
        />
      </div>
    </header>
  );
}
