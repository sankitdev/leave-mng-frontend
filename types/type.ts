export interface AuthState {
  id: string | null;
  role: string | null;
  name: string | undefined;
  email: string | undefined;
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
  name: undefined,
  email: undefined,
  image: undefined,
  department: null,
};
export type LoginFormInputs = {
  email: string;
  password: string;
};

export interface LeaveData {
  image: string;
  studentName: string;
  leaveId?: string;
  leaveType: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  approvedBy: string;
  status: "approved" | "rejected" | "pending";
}
export interface UserData {
  id?: string;
  image: string;
  name: string;
  gender?: "male" | "female";
  department: "cs" | "mechanical";
  phone: string;
}
export interface UpdateLeave {
  status: "approved" | "rejected";
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
export interface Teachers {
  id: string;
  name: string;
}
export type Staff = {
  pendingRequests: number;
  approvedRequests: number;
  rejectedRequests: number;
};
