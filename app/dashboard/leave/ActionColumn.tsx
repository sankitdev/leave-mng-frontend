"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { LeaveData } from "@/types/type";
import { updateLeave } from "@/api/user";
import { useUserProfile } from "@/hooks/useUserProfile";

export function ActionColumn({ leaveTable }: { leaveTable: LeaveData }) {
  const { role } = useUserProfile();

  if (role !== "admin" && role !== "hod" && role !== "staff") {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      {leaveTable.status === "pending" ? (
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              updateLeave(leaveTable.leaveId!, { status: "approved" })
            }
          >
            Approve
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              updateLeave(leaveTable.leaveId!, { status: "rejected" })
            }
          >
            Reject
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      ) : null}
    </DropdownMenu>
  );
}
