import { LoginFormInputs } from "@/components/login-form";
import axiosInstance from "./axiosInstance";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/auth.store";

export async function loginUser(
  userData: LoginFormInputs,
  router: ReturnType<typeof useRouter>
) {
  try {
    const { email, password } = userData;
    const response = await axiosInstance.post("/login", { email, password });
    console.log(response.data);
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
