import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const token = cookies().get("token")?.value;
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const user = verifyToken(token);
    return Response.json(user);
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }
}
