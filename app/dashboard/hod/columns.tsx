"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { UserData } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ActionColumn } from "./ActionColumn";

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage
          src={row.getValue("image") as string}
          alt={`${row.getValue("name") as string}'s avatar`}
        />
        <AvatarFallback>
          {((row.getValue("name") as string) || "").charAt(0)}
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <Badge
        variant={
          (row.getValue("gender") as string) === "male"
            ? "default"
            : "secondary"
        }
      >
        {row.getValue("gender") as string}
      </Badge>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => (
      <Badge
        variant={
          (row.getValue("department") as string) === "cs"
            ? "outline"
            : "destructive"
        }
      >
        {(row.getValue("department") as string) === "cs"
          ? "Computer Science"
          : "Mechanical"}
      </Badge>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionColumn updateUser={row.original} />,
  },
];
