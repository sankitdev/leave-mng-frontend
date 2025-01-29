import { Calendar, Home, Users } from "lucide-react";

export const dashBoardItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
    roles: ["student"],
  },
  {
    title: "Calendar",
    url: "/dashboard/calender",
    icon: Calendar,
    roles: ["admin", "hod", "staff", "student"],
  },
  {
    title: "HODs",
    url: "/dashboard/hod",
    icon: Users,
    roles: ["admin", "hod"],
  },
  {
    title: "Staff",
    url: "/dashboard/staff",
    icon: Users,
    roles: ["admin", "hod", "staff"],
  },
  {
    title: "Students",
    url: "/dashboard/student",
    icon: Users,
    roles: ["admin", "hod", "staff", "student"],
  },
];
