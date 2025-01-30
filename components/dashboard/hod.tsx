import { Staff } from "@/types/type";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const HodDashboard = ({ data }: { data: Staff }) => {
  const hodData = [
    { count: data.pendingRequests, label: "Total Pending Requests" },
    { count: data.approvedRequests, label: "Total Approved Requests" },
    { count: data.rejectedRequests, label: "Total Rejected Requests" },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {hodData.map((item, index) => (
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

export default HodDashboard;
