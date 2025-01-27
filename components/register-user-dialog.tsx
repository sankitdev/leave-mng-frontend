"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RegisterUserForm } from "./registerUser";
import { useState } from "react";

export function RegisterUserDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Register User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register User</DialogTitle>
          <DialogDescription>
            Fill out the form below to register a new user.
          </DialogDescription>
        </DialogHeader>
        <RegisterUserForm onSubmitSuccess={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
