import { z } from "zod";
const genderEnum = z.enum(["male", "female"]);
const departmentEnum = z.enum(["cs", "mechanical"]);
export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters long" }),
  gender: genderEnum,
  image: z.string(),
  phone: z
    .string()
    .min(10, { message: "Phone number should be at least 10 characters long" }),
  address: z.string().optional(),
  department: departmentEnum,
  roleId: z.number().optional(),
});
export const leaveFormSchema = z.object({
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
  requestToId: z.string({
    required_error: "Teacher is required",
  }),
  leaveType: z.enum(["Full Day", "First Half", "Second Half"], {
    required_error: "Leave type is required",
  }),
  reason: z
    .string()
    .min(1, "Reason is required")
    .max(500, "Reason must be less than 500 characters"),
});

export type LeaveFormValues = z.infer<typeof leaveFormSchema>;

export const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  department: z.enum(["cs", "mechanical"], {
    required_error: "Please select a department",
  }),
  image: z.string(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
