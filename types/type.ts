export interface AuthState {
  id: string | null;
  role: string | null;
  name: string | null;
  email: string | null;
  image: string | null;
  department: string | null;
  login: (userData: {
    id: string;
    role: string;
    name?: string;
    email?: string;
    image?: string;
    department?: string;
  }) => void;
  logout: () => void;
}

export const defaultAuthState: Omit<AuthState, "login" | "logout"> = {
  id: null,
  role: null,
  name: null,
  email: null,
  image: null,
  department: null,
};
