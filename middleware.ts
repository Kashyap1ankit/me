import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const response = NextResponse.next();

  const blog = cookieStore.get("blog-create");

  if (!blog) {
    return NextResponse.rewrite(new URL("/blog/verify", request.url));
  }

  if (blog.value) {
    const secret = new TextEncoder().encode(process.env.JOSE_JWT_SECRET);
    const alg = "HS256";
    const jwt = await new jose.SignJWT({ verified: true })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer("ankit")
      .setAudience("ankit")
      .setExpirationTime("12hr")
      .sign(secret);

    response.cookies.set({
      name: "blog-create",
      value: jwt,
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 12, //1/2 day limit
      path: "/",
    });
  }
  return;
}

export const config = {
  matcher: ["/blog/create"],
};
