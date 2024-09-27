import { Separator } from "@/components/ui/separator";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="container mb-5 mt-20">
      <Separator className="my-5 h-[1px] bg-primary-black/40" />

      <div className="flex-center-between">
        <p className="font-medium">&copy; 2024. All Rights Reserved</p>

        <Link
          href="/"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-bold text-transparent transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-500 hover:to-purple-500"
        >
          Grafismo Digital
        </Link>

        <div className="flex-center-between gap-x-4">
          <Link
            href="#"
            className="flex-center h-7 w-7 rounded-full bg-primary-green text-white"
          >
            <Instagram size="16" />
          </Link>
          <Link
            href="#"
            className="flex-center h-7 w-7 rounded-full bg-primary-green text-white"
          >
            <Facebook size="16" />
          </Link>
          <Link
            href="#"
            className="flex-center h-7 w-7 rounded-full bg-primary-green text-white"
          >
            <Twitter size="16" />
          </Link>
          <Link
            href="#"
            className="flex-center h-7 w-7 rounded-full bg-primary-green text-white"
          >
            <Linkedin size="16" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
