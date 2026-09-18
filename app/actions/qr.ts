"use server";

import { verify, generateURI } from "otplib";
import QRCode from "qrcode";

export async function generaetOtp() {
  // const secret = generateSecret();
  // console.log("scrent is", secret);

  const uri = generateURI({
    issuer: "Portfoilio",
    label: "10xdevlab.in",
    secret: process.env.TOTP_SECRET || "",
  });

  QRCode.toFile("qr.png", uri, () => console.log("Hello"));
}

import { redirect } from "next/navigation";

export async function verifyOtp(formData: FormData) {
  const code = formData.get("code");
  const next = formData.get("next");

  console.log("code", code);

  if (typeof code !== "string" || code.length !== 6) {
    return { error: "Enter a valid 6-digit code." };
  }

  const result = await verify({
    secret: process.env.TOTP_SECRET || "",
    token: code,
  });

  console.log("resukt", result);

  if (!result.valid) {
    return { error: "Invalid code. Please try again." };
  }

  redirect(typeof next === "string" && next ? next : "/");
}
