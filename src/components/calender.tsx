"use client";
import FullCalendar from "@fullcalendar/react"; // FullCalendar component
import dayGridPlugin from "@fullcalendar/daygrid"; // Plugin for month view
import timeGridPlugin from "@fullcalendar/timegrid"; // Plugin for week/day view
import interactionPlugin from "@fullcalendar/interaction"; // Plugin for drag-and-drop

const Calendar = () => {
  // Sample leave events
  const events = [
    { title: "Leave - John", date: "2025-01-15" },
    { title: "Leave - Alice", date: "2025-01-20" },
    { title: "Leave - Bob", date: "2025-01-25" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Add plugins
        initialView='dayGridMonth' // Default view (month, week, day, etc.)
        events={events} // Pass events
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={false} // Allow drag-and-drop
        selectable={true} // Allow date selection
      />
    </div>
  );
};

export default Calendar;
