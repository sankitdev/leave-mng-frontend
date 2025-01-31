import axiosInstance from "./axiosInstance";
import type { useRouter } from "next/navigation";
import useAuthStore from "@/store/auth.store";
import { LoginFormInputs, UpdateLeave, UserData } from "@/types/type";
import { LeaveFormValues } from "@/validation/validation";
import { toast } from "@/hooks/use-toast";

export async function loginUser(
  userData: LoginFormInputs,
  router: ReturnType<typeof useRouter>
) {
  try {
    const { email, password } = userData;
    const response = await axiosInstance.post("/login", { email, password });
    if (response.status === 200) {
      const { id, role, name, email, image, department } =
        response.data.userData;
      toast({
        title: `Login Successful ${name}`,
        description: "Have a nice day!!",
      });
      const { login } = useAuthStore.getState();
      login({ id, role, name, email, image, department });
      router.push("/dashboard");
    }
  } catch (error) {
    toast({
      title: `Error: ${error}`,
      description: "Something Broke",
      variant: "destructive",
    });
    console.error("Error:", error);
  }
}
export async function getLeavesByDepartment(department: string) {
  try {
    const response = await axiosInstance.get(`/leaves/${department}`);
    const leaves = response.data.leaves || [];
    return leaves;
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function getPersonalLeaveRequests() {
  try {
    const response = await axiosInstance.get("/leaves/requests");
    return response.data.leaves;
  } catch (error) {
    console.error("Error :", error);
  }
}
export async function getLeaveBalance() {
  try {
    const response = await axiosInstance.get("/leaves/balance");
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}
export async function getDashBoard() {
  try {
    const response = await axiosInstance.get("/dashboard");
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}
export async function getTeachers(department: string | null) {
  try {
    const response = await axiosInstance.get(`/staff/${department}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}
export async function getAllLeaveRequests() {
  try {
    const response = await axiosInstance.get("/leaves");
    return response.data.leaves;
  } catch (error) {
    console.error("Error", error);
  }
}
export async function logoutUser(router: ReturnType<typeof useRouter>) {
  try {
    const response = await axiosInstance.post("/logout", {});
    if (response.status === 200) {
      toast({
        title: `Logout Successful`,
        description: "Have a nice day!!",
      });
      const { logout } = useAuthStore.getState();
      logout();
      router.push("/");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function applyLeave(data: LeaveFormValues) {
  try {
    const response = await axiosInstance.post("/apply-leave", { ...data });
    if (response.status === 200) {
      console.log("leave Applied");
    }
  } catch (error) {
    console.error("Error", error);
  }
}
export async function updateLeave(leaveId: string, update: UpdateLeave) {
  try {
    await axiosInstance.patch(`/leave-request/${leaveId}/update`, update);
  } catch (error) {
    console.error("Error", error);
  }
}
export async function getUsers(role: string) {
  try {
    const response = await axiosInstance.get(`/users/${role}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}
export async function updateProfile(data: UserData) {
  try {
    const response = await axiosInstance.patch("/update-profile", data);
    const [newdata] = response.data;
    if (response.status === 200) {
      const { login } = useAuthStore.getState();
      login(newdata);
    }
  } catch (error) {
    console.error("Error", error);
  }
}
