import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  const cookies = cookie.parse(request.headers.get("cookie") || "");
  console.log("datdat: ", cookies);
  const authToken = cookies.token;

  if (authToken) {
    if (pathname.startsWith("/watch") || pathname.startsWith("/profile")) {
      return NextResponse.next();
    }
  } else {
    if (pathname.startsWith("/watch") || pathname.startsWith("/profile")) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"]
};
