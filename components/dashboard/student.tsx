import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LeaveBalance } from "@/types/type";

const StudentDashboard = ({ data }: { data: LeaveBalance }) => {
  const leaveData = [
    { count: data.totalLeave, label: "Total Leaves" },
    { count: data.availableLeave, label: "Available Leaves" },
    { count: data.usedLeave, label: "Total Used Leaves" },
    { count: data.attendance, label: "Attendance Percentage" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {leaveData.map((item, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">{item.count}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">{item.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StudentDashboard;
