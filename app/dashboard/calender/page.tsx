"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { getAllLeaveRequests, getLeavesByDepartment } from "@/api/user";
import { Leave } from "@/types/type";

export default function Calendar() {
  const { department } = useUserProfile();
  const [leaves, setLeaves] = useState<Leave[]>([]);
  const { role } = useUserProfile();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // Prevents state updates if unmounted

    const fetchData = async () => {
      try {
        let data: Leave[] = [];

        if (role === "student") {
          data = await getLeavesByDepartment(department!);
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
      isMounted = false; // Cleanup to prevent state update if unmounted
    };
  }, [role, department]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full md:w-[80%] md:h-[90%] mx-auto py-4 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Leave Calendar</h1>
      <div className="overflow-hidden rounded-lg">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={leaves.map((leave) => ({
            title: leave.studentName,
            start: leave.from,
            end: leave.to,
          }))}
          height="auto"
        />
      </div>
    </div>
  );
}
