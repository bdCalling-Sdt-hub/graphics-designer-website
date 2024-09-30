import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

export default function ModalWrapper({ open, setOpen, title, children }) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="scroll-hide max-h-[90vh] max-w-xl overflow-auto bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-extrabold">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription>{children}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="absolute right-0 top-0 h-10 w-10 rounded-full border-none p-0 shadow-none">
            <X size={18} />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
