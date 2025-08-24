import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashBoard/:path*", "/Bookings/:path*", "/Rooms/:path*", "/Guests/:path*"],
};
