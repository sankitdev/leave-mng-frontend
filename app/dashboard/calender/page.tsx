"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { getLeavesByDepartment } from "@/api/user";
import { Leave } from "@/types/type";

export default function Calendar() {
  const { department } = useUserProfile();
  const [leaves, setLeaves] = useState<Leave[]>([]);

  useEffect(() => {
    const fetchLeaveData = async () => {
      if (department) {
        const leaveData = await getLeavesByDepartment(department);
        console.log(leaveData);
        setLeaves(leaveData || []); // Set leaves data if it's fetched
      }
    };

    fetchLeaveData();
  }, [department]);

  return (
    <div className="w-full md:w-[80%] md:h-[90%] mx-auto py-4 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Leave Calendar</h1>
      <div className="overflow-hidden rounded-lg">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={leaves.map((leave) => ({
            title: leave.studentName,
            start: leave.startDate,
            end: leave.endDate,
          }))}
          height="auto"
        />
      </div>
    </div>
  );
}
