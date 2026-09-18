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

export async function verifyOtp(code: string) {
  const result = await verify({
    secret: process.env.TOTP_SECRET || "",
    token: code,
  });
  console.log(result.valid);
}
