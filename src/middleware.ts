import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.nextUrl);

  console.log(`datdat: ${pathname}`);

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
