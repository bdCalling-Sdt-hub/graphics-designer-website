import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { PhoneInput } from "@/components/PhoneInput/PhoneInput";
import { useEffect, useState } from "react";
import { useGetProfileQuery } from "@/redux/features/user/userApi";
import { useCreateRequestMutation } from "@/redux/features/request/requestApi";
import { ErrorModal } from "@/utils/modalHook";
import SuccessLottie from "@/components/SuccessLottie/SuccessLottie";
import ModalWrapper from "@/components/ModalWrapper/ModalWrapper";

export default function RequestFormModal({ open, setOpen }) {
  const { data: userRes } = useGetProfileQuery();
  const user = userRes?.data || {};
  const [createRequest, { isLoading: isCreatingRequest }] =
    useCreateRequestMutation();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await createRequest(data).unwrap();
      if (res?.success) {
        setShowSuccessMessage(true);
      }
    } catch (error) {
      ErrorModal(error?.data?.message);
      setOpen(false);
    }
  };

  // Set default values
  useEffect(() => {
    setValue("fullName", user?.name), setValue("email", user?.email);
    setValue("phoneNumber", user?.phoneNumber);
  }, [user]);

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
        setOpen(false);
      }, 7000);
    }
  }, [showSuccessMessage]);

  return (
    <ModalWrapper
      title={showSuccessMessage ? "Success" : "Request Form"}
      open={open}
      setOpen={setOpen}
    >
      {showSuccessMessage ? (
        <div>
          <SuccessLottie />
          <div className="space-y-3 text-center">
            <h4 className="text-3xl font-extrabold text-success">
              Thank you for reaching out to me ❤️
            </h4>
            <p className="text-xl font-medium text-muted-foreground">
              I will get back to you shortly. Stay tuned!
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="space-y-8">
            {/* Title */}
            <div className="grid w-full items-center gap-2">
              <Label
                htmlFor="title"
                className="mb-1 block font-semibold text-primary-black"
              >
                Title
              </Label>
              <Input
                type="text"
                id="title"
                placeholder="Logo, banner, cover or other design"
                {...register("title", { required: true })}
                className="rounded-2xl border border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none focus:outline-none"
              />
              {errors.title && (
                <p className="mt-1 text-danger">Title is required</p>
              )}
            </div>

            {/* Full name */}
            <div className="grid w-full items-center gap-2">
              <Label
                htmlFor="name"
                className="mb-1 block font-semibold text-primary-black"
              >
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your full name"
                {...register("name", { required: true })}
                className="rounded-2xl border border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none"
              />
              {errors.name && (
                <p className="mt-1 text-danger">Full Name is required</p>
              )}
            </div>

            {/* phone number */}
            <div className="grid w-full items-center gap-2">
              <Label
                htmlFor="phoneNumber"
                className="mb-1 block font-semibold text-primary-black"
              >
                Phone Number
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
                  />
                )}
              />

              {errors.phoneNumber && (
                <p className="mt-1 text-danger">Phone Number is required</p>
              )}
            </div>

            {/* email */}
            <div className="grid w-full items-center gap-2">
              <Label
                htmlFor="email"
                className="mb-1 block font-semibold text-primary-black"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                disabled={true}
                {...register("email")}
                className="rounded-2xl border border-primary-black/75 bg-transparent px-4 py-5 text-primary-black outline-none"
              />
            </div>

            {/* Description */}
            <div className="grid w-full items-center gap-2">
              <Label
                htmlFor="description"
                className="mb-1 block font-semibold text-primary-black"
              >
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Tell us about your queries"
                {...register("description", {
                  required: true,
                })}
                className="min-h-32 rounded-2xl border border-primary-black/75 bg-transparent text-primary-black outline-none"
              />
              {errors.description && (
                <p className="mt-1 text-danger">
                  Please tell me in details about your design requirements
                </p>
              )}
            </div>
          </div>

          <Button
            loading={isCreatingRequest}
            disabled={isCreatingRequest}
            type="submit"
            className="mt-8 h-[2.7rem] w-full rounded-2xl bg-primary-green font-semibold"
          >
            Submit
            {isCreatingRequest && (
              <Loader className="ml-2 animate-spin" size={16} />
            )}
          </Button>
        </form>
      )}
    </ModalWrapper>
  );
}
