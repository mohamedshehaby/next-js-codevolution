import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/profile",
// };

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith("/profile")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   if (request.nextUrl.pathname.startsWith("/time")) {
//     return NextResponse.rewrite(new URL("/", request.url));
//   }
// }

export default function middleware(request: NextRequest) {
  const themePreference = request.cookies.get("theme");
  const response = NextResponse.next();
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  return response;
}

export const config = {
  matcher: "/profile",
};
