import { Staff } from "@/types/type";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const StaffDashboard = ({ data }: { data: Staff }) => {
  const staffData = [
    { count: data.pendingRequests, label: "Pending Leave Requests" },
    { count: data.approvedRequests, label: "Approved Leaves" },
    { count: data.rejectedRequests, label: "Rejected Leaves" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {staffData.map((item, index) => (
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

export default StaffDashboard;
