import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();

  const blog = cookieStore.get("blog-create");

  if (!blog) {
    return NextResponse.rewrite(new URL("/blog/verify", request.url));
  }
  return;
}

export const config = {
  matcher: "/blog/create",
};
