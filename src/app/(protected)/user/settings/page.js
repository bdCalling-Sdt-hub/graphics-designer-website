import React from "react";
import SettingsForm from "./_components/SettingsForm";

export const metadata = {
  title: "Settings",
  description: "Change user password settings page",
};

export default function UserProfilePage() {
  return (
    <div>
      <SettingsForm />
    </div>
  );
}
