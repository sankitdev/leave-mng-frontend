import useAuthStore from "@/store/auth.store";

export const useUserProfile = () => {
  const { id, name, email, role, image, department } = useAuthStore();

  return {
    id,
    name,
    email,
    role,
    image,
    department,
    isLoggedIn: !!id,
    isAdmin: role === "admin",
    isHod: role === "hod",
    isStaff: role === "staff",
    isStudent: role === "student",
  };
};
