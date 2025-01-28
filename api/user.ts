import axiosInstance from "./axiosInstance";
import type { useRouter } from "next/navigation";
import useAuthStore from "@/store/auth.store";
import { LoginFormInputs } from "@/types/type";

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
      const { login } = useAuthStore.getState();
      login({ id, role, name, email, image, department });
      router.push("/dashboard");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function studentLeaveDataByDepartment(department: string) {
  try {
    const response = await axiosInstance.get(`/leaveData/${department}`);
    const leaves = response.data.leaves || [];
    return leaves;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function studentLeaveData() {
  try {
    const response = await axiosInstance.get(`/leave-data`);
    console.log(response);
    return response.data.leaves || [];
  } catch (error) {
    console.error("Error :", error);
  }
}

export async function logoutUser(router: ReturnType<typeof useRouter>) {
  try {
    const response = await axiosInstance.post("/logout", {});
    if (response.status === 200) {
      const { logout } = useAuthStore.getState();
      logout();
      router.push("/");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
