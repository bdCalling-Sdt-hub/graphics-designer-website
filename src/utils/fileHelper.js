import { getImageUrl } from "@/config/envConfig";

export const showImage = (path) => {
  if (!path) {
    return null;
  }
  return getImageUrl() + path;
};
