"use client";
import PageContainer from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import LeaveTable from "./leave/page";
import { getLeaveBalance } from "@/api/user";
import { useUserProfile } from "@/hooks/useUserProfile";
import { LeaveBalance } from "@/types/type";

export default function OverViewLayout() {
  const [leave, setLeave] = useState<LeaveBalance | null>(null); // Type the state
  const { name } = useUserProfile();
  const fetchData = async () => {
    const response = await getLeaveBalance();
    setLeave(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!leave) return <div>Loading...</div>;

  const leaveData = [
    {
      count: leave.totalLeave,
      label: "Total Leaves",
    },
    {
      count: leave.availableLeave,
      label: "Available Leaves",
    },
    {
      count: leave.usedLeave,
      label: "Total Used Leaves",
    },
    {
      count: leave.attendance,
      label: "Attendance Percentage",
    },
  ];

  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, Welcome back {name} 👋
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {leaveData.map((leaveItem, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">
                  {leaveItem.count}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{leaveItem.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <LeaveTable />
      </div>
    </PageContainer>
  );
}
