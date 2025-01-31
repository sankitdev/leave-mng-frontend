"use client";

import { ColumnDef } from "@tanstack/react-table";
// import { DataTableColumnHeader } from "./columnHide";
import { LeaveData } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ActionColumn } from "./ActionColumn";

export const columns: ColumnDef<LeaveData>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage
          src={row.getValue("image") as string}
          alt={`${row.getValue("studentName") as string}'s avatar`}
        />
        <AvatarFallback>
          {((row.getValue("studentName") as string) || "").charAt(0)}
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "studentName",
    header: "Name",
  },
  {
    accessorKey: "leaveType",
    header: "Leave Type",
  },
  {
    accessorKey: "from",
    header: "From",
  },
  {
    accessorKey: "to",
    header: "To",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "approvedBy",
    header: "Approved By",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionColumn leaveTable={row.original} />,
  },
];
