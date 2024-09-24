"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Settings } from "lucide-react";
import { List } from "lucide-react";
import { LogOut } from "lucide-react";
import { Camera } from "lucide-react";
import { useDispatch } from "react-redux";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import { X } from "lucide-react";
import { Loader } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { firstLetterUppercase } from "@/utils/firstLetterUppercase";
import { logout } from "@/redux/features/auth/authSlice";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/features/user/userApi";

export default function UserDashboardSidebar() {
  const pathname = usePathname().replace("/user/", "");
  const dispatch = useDispatch();
  const router = useRouter();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [profilePicInput, setProfilePicInput] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);

  const {
    data: userRes,
    isLoading: isUserLoading,
    refetch: userRefetch,
  } = useGetProfileQuery();
  const user = userRes?.data || [];

  const handleLogout = () => {
    dispatch(logout());

    SuccessModal("Logout Successful");

    router.refresh();
  };

  // change profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfilePicInput(file);
      setProfilePicUrl(URL.createObjectURL(file));
    }
  };

  const handleChangeProfilePic = async (e) => {
    e.preventDefault();

    if (!profilePicInput) {
      ErrorModal("Profile picture not found!");
      return;
    }

    const formData = new FormData();

    formData.append("image", profilePicInput);

    try {
      const res = await updateProfile(formData).unwrap();
      if (res?.success) {
        SuccessModal("Profile picture updated successfully");

        setProfilePicUrl(null);
        setProfilePicInput(null);
        document.getElementById("profilePicInput").value = null;
        window.location.reload();
      }
    } catch (error) {
      ErrorModal(error?.data?.message);
    }
  };

  return (
    <div>
      {/* user info */}
      <div className="text-center">
        <div className="group relative mx-auto block w-max">
          <div>
            {profilePicUrl ? (
              <div>
                <Avatar className="h-[90px] w-[90px] border border-primary-green">
                  <AvatarImage src={profilePicUrl} />
                </Avatar>

                {/* update image button */}
                <button
                  className="mx-auto mt-2 block w-full rounded bg-primary-green text-sm text-white hover:bg-black"
                  onClick={handleChangeProfilePic}
                  disabled={isUpdating}
                >
                  {isUpdating ? (
                    <Loader size={16} className="mx-auto animate-pulse" />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            ) : user?.image ? (
              <Avatar className="h-[90px] w-[90px]">
                <AvatarImage src={user?.image} />
                <AvatarFallback>
                  {user?.name &&
                    firstLetterUppercase(user?.name[0]) +
                      firstLetterUppercase(user?.name[1])}
                </AvatarFallback>
              </Avatar>
            ) : (
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-primary-green text-2xl font-bold uppercase text-white">
                <p>
                  {user?.name &&
                    firstLetterUppercase(user?.name[0]) +
                      firstLetterUppercase(user?.name[1])}
                </p>
              </div>
            )}
          </div>

          <div>
            <input
              id="profilePicInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {!profilePicInput && (
              <button
                className="invisible absolute bottom-0 right-0 rounded-full bg-white p-2 text-black opacity-0 transition-all duration-300 ease-in-out hover:text-primary-green group-hover:visible group-hover:opacity-100"
                onClick={() =>
                  document.getElementById("profilePicInput").click()
                }
                title="Change profile picture"
              >
                <Camera size={16} />
              </button>
            )}

            {/* show remove button if image url is present */}
            {profilePicInput && (
              <button
                className="absolute right-0 top-0 rounded-full bg-black p-[2px] text-danger"
                onClick={() => {
                  document.getElementById("profilePicInput").value = null;
                  setProfilePicInput(null);
                  setProfilePicUrl(null);
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        <h5 className="mb-1 mt-4 text-xl font-medium">{user?.name}</h5>
        <p className="text-muted-foreground">{user?.email}</p>
      </div>

      {/* links */}
      <nav className="mt-10 flex w-full max-w-full gap-x-5 overflow-auto font-medium lg:block lg:space-y-3">
        <Link
          href="/user/profile"
          className={cn(
            "flex min-w-max items-center gap-x-3 rounded p-3 text-primary-black lg:text-lg",
            pathname === "profile"
              ? "bg-primary-green text-white"
              : "bg-transparent",
          )}
        >
          <User size={25} /> Profile Details
        </Link>

        <Link
          href="/user/settings"
          className={cn(
            "flex min-w-max items-center gap-x-3 rounded p-3 text-primary-black lg:text-lg",
            pathname === "settings"
              ? "bg-primary-green text-white"
              : "bg-transparent",
          )}
        >
          <Settings size={25} /> Settings
        </Link>

        <button
          className="flex min-w-max items-center gap-x-3 rounded p-3 text-primary-black lg:text-lg"
          onClick={handleLogout}
        >
          <LogOut size={25} /> Log out
        </button>
      </nav>
    </div>
  );
}
