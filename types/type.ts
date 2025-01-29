export interface AuthState {
  id: string | null;
  role: string | null;
  name: string | null;
  email: string | null;
  image: string | undefined;
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
  image: undefined,
  department: null,
};
export type LoginFormInputs = {
  email: string;
  password: string;
};

export interface LeaveData {
  leaveType: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  approvedBy: string;
  status: "Approved" | "Rejected" | "Pending";
}

export interface UserData {
  image: string;
  name: string;
  gender: "male" | "female";
  department: "cs" | "mechanical";
  phone: string;
}

export interface Leave {
  startDate: string;
  endDate: string;
  studentName: string;
}

export interface LeaveBalance {
  totalLeave: number;
  availableLeave: number;
  usedLeave: number;
  attendance: number;
}
