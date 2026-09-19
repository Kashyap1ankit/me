"use server";

import { verify, generateURI, generateSecret } from "otplib";
import QRCode from "qrcode";
import { redirect } from "next/navigation";
import * as jose from "jose";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function generaetOtp() {
  // otp secret generation and

  const secret = generateSecret();
  console.log("scrent is", secret);

  const uri = generateURI({
    issuer: "Portfoilio",
    label: "10xdevlab.in",
    secret: process.env.TOTP_SECRET || "",
  });

  QRCode.toFile("/public/qr.png", uri, () => console.log("Hello"));
}

export async function verifyOtp(formData: FormData) {
  const code = formData.get("code");
  const next = formData.get("next");

  if (typeof code !== "string" || code.length !== 6) {
    return { error: "Enter a valid 6-digit code." };
  }

  const result = await verify({
    secret: process.env.TOTP_SECRET || "",
    token: code,
  });

  if (!result.valid) {
    return { error: "Invalid code. Please try again." };
  }

  const secret = new TextEncoder().encode(process.env.JOSE_JWT_SECRET);
  const alg = "HS256";
  const jwt = await new jose.SignJWT({ verified: true })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("ankit")
    .setAudience("ankit")
    .setExpirationTime("12hr")
    .sign(secret);

  const cookieStore = await cookies();

  cookieStore.set("blog-create", jwt, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 12, //1/2 day limit
    sameSite: "strict",
    path: "/",
  });

  redirect(typeof next === "string" && next ? next : "/");
}
