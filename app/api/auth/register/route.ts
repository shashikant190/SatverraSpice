import { db } from "../../../../src/lib/db";
import { hashPassword } from "../../../../src/lib/hash";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await db.user.create({
    data: {
      email,
      password: await hashPassword(password),
    },
  });

  return Response.json(user);
}
