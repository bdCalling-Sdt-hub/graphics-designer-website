import React from "react";
import UserProfileForm from "./_components/UserProfileForm";

export const metadata = {
  title: "Profile",
  description: "Profile page of Grafismo Digital.",
};

export default function UserProfilePage() {
  return (
    <div>
      <UserProfileForm />
    </div>
  );
}
