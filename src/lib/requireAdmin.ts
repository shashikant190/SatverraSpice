import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export function requireAdmin() {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const user: any = verifyToken(token);

  if (user.role !== "admin") {
    throw new Error("Forbidden");
  }

  return user;
}
