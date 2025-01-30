"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import type { UserData } from "@/types/type";
import { useEffect, useState } from "react";
import { getUsers } from "@/api/user";

export default function UserTable() {
  const [users, setUsers] = useState<UserData[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getUsers("student");
      setUsers(data);
    };
    fetch();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  );
}
