import { AuthState, defaultAuthState } from "@/types/type";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        ...defaultAuthState,
        login: (userData) => {
          set({ ...defaultAuthState, ...userData });
        },
        logout: () =>
          set({
            ...defaultAuthState,
          }),
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          id: state.id,
          role: state.role,
          name: state.name,
          email: state.email,
          image: state.image,
        }),
      }
    ),
    { name: "AuthStore" } // Name of the store in Redux DevTools
  )
);

export default useAuthStore;
