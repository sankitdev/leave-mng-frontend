"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar() {
  return (
    <div className="max-w-4xl mx-auto p-4 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Leave Calendar</h1>
      <div className="overflow-hidden rounded-lg">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Event 1", date: "2025-01-25" },
            { title: "Event 2", date: "2025-01-28" },
          ]}
          height="auto"
        />
      </div>
    </div>
  );
}
