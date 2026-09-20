import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("blog-create")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/blog/verify", request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JOSE_JWT_SECRET);

    const { payload } = await jose.jwtVerify(token, secret, {
      issuer: "ankit",
      audience: "ankit",
    });

    const expireAt = (payload.exp as number) * 1000;
    const response = NextResponse.next();

    if (expireAt - Date.now() < 30 * 60 * 1000) {
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
    return response;
  } catch (error) {
    return NextResponse.redirect(new URL("/blog/verify", request.url));
  }
}

export const config = {
  matcher: ["/blog/create"],
};
