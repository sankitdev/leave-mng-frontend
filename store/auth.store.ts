import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  userId: string | null;
  role: string | null;
  login: (userData: { id: string; role: string }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
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
  )
);

export default useAuthStore;
