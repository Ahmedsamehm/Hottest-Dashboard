import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/dashBoard", "/Bookings", "/Rooms", "/Guests"];
const authRoutes = ["/Login", "/Register"];
export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token")?.value;

  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  if (token && authRoutes.includes(req.nextUrl.pathname) && !authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashBoard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*", "/dashBoard/:path*", "/Bookings/:path*", "/Rooms/:path*", "/Guests/:path*", "/Login/:path*"],
};
