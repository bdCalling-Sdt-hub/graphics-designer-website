import { toast } from "sonner";

export const SuccessToast = (message, toastId) => {
  return toast.success(message, {
    id: toastId,
  });
};
export const ErrorToast = (message, toastId) => {
  return toast.error(message, {
    id: toastId,
  });
};

export const WarningToast = (message, toastId) => {
  return toast.warning(message, {
    id: toastId,
  });
};
