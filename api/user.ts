import { LoginFormInputs } from "@/components/login-form";
import axiosInstance from "./axiosInstance";
import { useRouter } from "next/navigation";

export async function loginUser(
  userData: LoginFormInputs,
  router: ReturnType<typeof useRouter>
) {
  try {
    const { email, password } = userData;
    const response = await axiosInstance.post("/login", { email, password });
    if (response.status === 200) {
      router.push("/dashboard");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function logoutUser() {
  try {
    await axiosInstance.post("/logout", {});
  } catch (error) {
    console.error("Error:", error);
  }
}
