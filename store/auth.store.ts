import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface AuthState {
  userId: string | null;
  role: string | null;
  login: (userData: { id: string; role: string }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        userId: null,
        role: null,
        login: (userData) =>
          set({
            userId: userData.id,
            role: userData.role,
          }),
        logout: () => set({ userId: null, role: null }),
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          userId: state.userId,
          role: state.role,
        }),
      }
    ),
    { name: "AuthStore" } // Name of the store in Redux DevTools
  )
);

export default useAuthStore;
