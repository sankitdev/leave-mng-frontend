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
