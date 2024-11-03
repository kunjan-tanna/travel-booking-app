import { z } from "zod";
const schema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is Required",
    })
    .email("Invalid Email Address"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export { schema };