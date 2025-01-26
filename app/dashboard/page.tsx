import PageContainer from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import LeaveTable from "./leave/page";

export default function OverViewLayout() {
  const leave = [
    {
      count: 28,
      label: "Total Available Leaves",
    },
    {
      count: 8,
      label: "Total Sick Leaves",
    },
    {
      count: 14,
      label: "Total Casual Leaves",
    },
    {
      count: 6,
      label: "Total Paid Earned Leaves",
    },
  ];
  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {leave.map((leave, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle className={`text-4xl font-bold`}>
                  {leave.count}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{leave.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <LeaveTable />
      </div>
    </PageContainer>
  );
}
