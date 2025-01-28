"use client";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table"; // Your data table component
import { columns } from "./columns"; // Your column definitions
import { useUserProfile } from "@/hooks/useUserProfile";
import { studentLeaveData } from "@/api/user";

export default function LeaveTable() {
  const { id } = useUserProfile(); // Get the userId from Zustand store
  const [leaves, setLeaves] = useState([]); // State to store fetched data
  const data = async () => {
    if (id) {
      const leaves = await studentLeaveData(id);
      console.log(leaves);
      setLeaves(leaves);
    }
  };
  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-2 shadow-lg rounded-2xl">
      <DataTable columns={columns} data={leaves} /> {/* Render fetched data */}
    </div>
  );
}
