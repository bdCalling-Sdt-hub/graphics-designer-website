import { EyeIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";

export default function EyeIconInverse({ showPassword, setShowPassword }) {
  return (
    <div>
      {showPassword ? (
        <EyeOffIcon
          className="stroke-secondary-1 absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
          role="button"
          size={20}
        />
      ) : (
        <EyeIcon
          className="stroke-secondary-1 absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
          role="button"
          size={20}
        />
      )}
    </div>
  );
}
