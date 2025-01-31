"use client";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getPersonalLeaveRequests, getAllLeaveRequests } from "@/api/user";
import { LeaveData } from "@/types/type";
import { useUserProfile } from "@/hooks/useUserProfile";
export default function LeaveTable() {
  const [leaves, setLeaves] = useState<LeaveData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { role } = useUserProfile();
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        let data: LeaveData[] = [];

        if (role === "student") {
          data = await getPersonalLeaveRequests();
        } else if (role === "staff" || role === "hod") {
          data = await getAllLeaveRequests();
        } else if (role === "admin") {
          data = await getAllLeaveRequests();
        }

        if (isMounted) setLeaves(data);
      } catch (err) {
        console.error("Error fetching leave data:", err);
        setError("Error fetching data");
      }
    };

    if (role) fetchData();

    return () => {
      isMounted = false;
    };
  }, [role]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-2 shadow-lg rounded-2xl">
      <DataTable columns={columns} data={leaves} />
    </div>
  );
}
