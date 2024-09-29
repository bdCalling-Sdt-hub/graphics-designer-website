"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";

export default function ContinueToLoginModal({ open, setOpen, text }) {
  return (
    <AlertDialog open={open} setOpen={setOpen}>
      <AlertDialogContent className="space-y-5 bg-primary-white">
        <div className="flex items-start gap-x-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300/75 text-yellow-700">
            <TriangleAlert size={20} strokeWidth={2.6} />
          </div>

          <div className="space-y-2">
            <h5 className="text-xl font-semibold">Authentication Required</h5>
            <p>
              Please{" "}
              <Link href="/login" className="font-medium underline">
                login
              </Link>{" "}
              or{" "}
              <Link href="/sign-up" className="font-medium underline">
                Create Account
              </Link>{" "}
              to {text || "continue"}
            </p>
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <Link href="/login">
            <AlertDialogAction className="group flex w-full items-center gap-x-1 bg-primary-green lg:w-auto">
              Continue to login <AnimatedArrow size={16} />
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
