import { LeaveData, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<LeaveData[]> {
  return [
    {
      leaveType: "Paternity Leave",
      from: "18/09/2016",
      to: "15/08/2017",
      days: 2,
      reason: "Marriage Leave",
      approvedBy: "Ralph Edwards",
      status: "Approved",
    },
    {
      leaveType: "Sick Leave",
      from: "15/08/2017",
      to: "15/08/2017",
      days: 4,
      reason: "Compensation Leave",
      approvedBy: "Eleanor Pena",
      status: "Rejected",
    },
    {
      leaveType: "Annual Leave",
      from: "16/08/2013",
      to: "16/08/2013",
      days: 4,
      reason: "Jury Service Leave",
      approvedBy: "Dianne Russell",
      status: "Pending",
    },
    // Add more rows as needed
  ];
}
export default async function LeaveTable() {
  const data = await getData();
  return (
    <div className="py-2 shadow-lg rounded-2xl ">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
