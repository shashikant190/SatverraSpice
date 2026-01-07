// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { verifyToken } from "./src/lib/auth";

// export function middleware(req: NextRequest) {
//   const pathname = req.nextUrl.pathname;

//   if (pathname === "/admin-dashboard") {
//     return NextResponse.next();
//   }

//   if (!pathname.startsWith("/admin-dashboard")) {
//     return NextResponse.next();
//   }

//   const token = req.cookies.get("token")?.value;
//   if (!token) {
//     return NextResponse.redirect(new URL("/admin-dashboard", req.url));
//   }

//   try {
//     const user: any = verifyToken(token);
//     if (user.role !== "admin") {
//       return NextResponse.redirect(new URL("/admin-dashboard", req.url));
//     }
//     return NextResponse.next();
//   } catch {
//     return NextResponse.redirect(new URL("/admin-dashboard", req.url));
//   }
// }

// export const config = {
//   matcher: ["/admin-dashboard/:path*"],
// };




import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Allow admin login page freely
  if (pathname === "/admin-login") {
    // If already logged in, go to dashboard
    if (token) {
      return NextResponse.redirect(new URL("/admin-dashboard", req.url));
    }
    return NextResponse.next();
  }

  // Protect admin dashboard routes
  if (pathname.startsWith("/admin-dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin-login", req.url));
    }
    // ✅ DO NOT verify token here
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-dashboard/:path*", "/admin-login"],
};
