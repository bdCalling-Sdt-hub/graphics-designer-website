"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import "../../UserDashboard.css";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/features/user/userApi";
import { PhoneInput } from "@/components/PhoneInput/PhoneInput";
import { ErrorModal, SuccessModal } from "@/utils/modalHook";
import { Loader } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";

export default function UserProfileForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const dispatch = useDispatch();

  // Get user profile information
  const { data: userRes } = useGetProfileQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const user = userRes?.data || {};

  // Update user profile
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    try {
      const res = await updateProfile(formData).unwrap();
      if (res?.success) {
        SuccessModal("Profile updated successfully");
      }
    } catch (error) {
      ErrorModal(error?.data?.message);
    }
  };

  // Set react hook form default values
  useEffect(() => {
    setValue("name", user?.name);
    setValue("phoneNumber", user?.phoneNumber);
    setValue("email", user?.email);
    setValue("gender", user?.gender);
    setValue("address", user?.address);
  }, [user?.name]);

  return (
    <div className="overflow-auto">
      <h4 className="dashboard-colored-title mb-8">Personal Information: </h4>

      <form onSubmit={handleSubmit(onSubmit)} className="px-1">
        <div className="gap- block grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-8">
          {/* Name */}
          <div className="relative grid w-full items-center gap-1.5">
            <Label
              htmlFor="name"
              className="mb-1 block font-semibold text-primary-black"
            >
              Name :
            </Label>

            <Input
              type="text"
              id="fname"
              placeholder="First name"
              {...register("name", { required: true })}
              className="h-[2.5rem] rounded-2xl border border-primary-black bg-transparent text-primary-black outline-none focus:outline-none"
            />
            {errors.fname && (
              <p className="absolute -bottom-7 left-0 mt-1 text-danger">
                First name is required
              </p>
            )}
          </div>

          {/* phone number */}
          <div className="relative grid w-full items-center gap-1.5">
            <Label
              htmlFor="phoneNumber"
              className="mb-1 block font-semibold text-primary-black"
            >
              Phone Number :
            </Label>

            <Controller
              name="phoneNumber"
              rules={{ required: "Phone number is required" }}
              control={control}
              render={({ field }) => (
                <PhoneInput
                  value={field.value}
                  onChange={field.onChange}
                  international
                  defaultCountry="US"
                  className=""
                />
              )}
            />
          </div>

          {/* email */}
          <div className="relative grid w-full items-center gap-1.5">
            <Label
              htmlFor="email"
              className="mb-1 block font-semibold text-primary-black"
            >
              Email :
            </Label>
            <Input
              type="email"
              id="email"
              disabled={true}
              className="h-[2.5rem] rounded-2xl border border-primary-black bg-transparent text-primary-black outline-none"
              {...register("email")}
            />
          </div>

          {/* gender */}
          <div className="relative grid w-full items-center gap-1.5">
            <Label
              htmlFor="gender"
              className="mb-1 block font-semibold text-primary-black"
            >
              Gender :
            </Label>

            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={user?.gender}
                >
                  <SelectTrigger className="h-[2.5rem] rounded-2xl border border-primary-black">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* address */}
          <div className="relative col-span-2 grid w-full items-center gap-1.5">
            <Label
              htmlFor="address"
              className="mb-1 block font-semibold text-primary-black"
            >
              Address :
            </Label>

            <Input
              type="text"
              name="address"
              placeholder="Enter your address"
              {...register("address")}
              className="h-[2.5rem] rounded-2xl border border-primary-black bg-transparent text-primary-black outline-none"
            />
          </div>
        </div>

        <button
          disabled={isUpdating}
          className="primary-button mb-20 mt-10 flex h-12 items-center justify-center rounded-lg lg:mx-auto lg:w-1/4"
        >
          {isUpdating && <Loader size={20} className="mr-2 animate-spin" />}
          Save Changes
        </button>
      </form>
    </div>
  );
}
