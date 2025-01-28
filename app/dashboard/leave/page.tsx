import { DataTable } from "./data-table"; // Your data table component
import { columns } from "./columns"; // Your column definitions
import { studentLeaveData } from "@/api/user";
import { LeaveData } from "@/types/type";

export default async function LeaveTable() {
  try {
    console.log("Something");
    const leaves: LeaveData[] = await studentLeaveData(); // Fetch leaves on the server
    return (
      <div className="py-2 shadow-lg rounded-2xl">
        <DataTable columns={columns} data={leaves} />{" "}
        {/* Render fetched data */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching leave data:", error);
    return <div>Error fetching data</div>;
  }
}
