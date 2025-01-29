"use client";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { studentLeaveData } from "@/api/user";
import { LeaveData } from "@/types/type";

export default function LeaveTable() {
  const [leaves, setLeaves] = useState<LeaveData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await studentLeaveData();
        setLeaves(data);
      } catch (err) {
        console.error("Error fetching leave data:", err);
        setError("Error fetching data");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-2 shadow-lg rounded-2xl">
      <DataTable columns={columns} data={leaves} /> {/* Render fetched data */}
    </div>
  );
}
