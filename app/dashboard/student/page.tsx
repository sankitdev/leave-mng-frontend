"use client";
import { RegisterUserDialog } from "@/components/register-user-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const handleRegsiter = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button onClick={handleRegsiter}>Register</Button>
      <RegisterUserDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
}
