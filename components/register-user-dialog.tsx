"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RegisterUserForm } from "./registerUser";

interface RegisterUserDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegisterUserDialog({
  isOpen,
  onOpenChange,
}: RegisterUserDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Register User</DialogTitle>
          <DialogDescription>
            Fill out the form below to register a new user.
          </DialogDescription>
        </DialogHeader>
        <RegisterUserForm onSubmitSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
