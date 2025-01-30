"use client";
import PageContainer from "@/components/page-container";
import React, { useEffect, useState } from "react";
import { getDashBoard, getLeaveBalance } from "@/api/user";
import { useUserProfile } from "@/hooks/useUserProfile";
import { LeaveBalance, Staff } from "@/types/type";
import StudentDashboard from "@/components/dashboard/student";
import StaffDashboard from "@/components/dashboard/staff";
import HodDashboard from "@/components/dashboard/hod";
import AdminDashboard from "@/components/dashboard/admin";
import LeaveTable from "./leave/page";

export default function OverViewLayout() {
  const [data, setData] = useState(null);
  const { name, role } = useUserProfile();

  useEffect(() => {
    let isMounted = true; // Prevents state updates if unmounted

    const fetchData = async () => {
      try {
        let response;
        if (role === "student") {
          response = await getLeaveBalance();
        } else {
          response = await getDashBoard();
        }

        if (isMounted) {
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (role) {
      fetchData();
    }

    return () => {
      isMounted = false; // Cleanup to avoid setting state if component unmounts
    };
  }, [role]);

  if (!data) return <div>Loading...</div>;

  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Hi, Welcome back {name} 👋
        </h2>

        {/* Role-based UI Rendering */}
        {role === "student" && <StudentDashboard data={data as LeaveBalance} />}
        {role === "staff" && <StaffDashboard data={data as Staff} />}
        {role === "hod" && <HodDashboard data={data as Staff} />}
        {role === "admin" && <AdminDashboard data={data as Staff} />}
        <LeaveTable role={role} />
      </div>
    </PageContainer>
  );
}
