"use client";

import { useActionState } from "react";
import { verifyOtp } from "@/app/actions/qr";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function InputOTPForm() {
  const [state, formAction] = useActionState(verifyOtp, null);

  return (
    <div className="min-h-screen flex items-center">
      <form action={formAction} className="mx-auto max-w-md ">
        <Card className="dark:bg-[#171717]">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">
              Verify your login
            </CardTitle>
            <CardDescription className="text-black dark:text-[#A19C8A]">
              Enter the verification code from google authenticator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel
                  htmlFor="otp-verification"
                  className="text-black dark:text-white"
                >
                  Verification code
                </FieldLabel>
              </div>
              <InputOTP
                maxLength={6}
                id="otp-verification"
                required
                name="code"
              >
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl ">
                  <InputOTPSlot
                    index={0}
                    className="dark:bg-[#171717] text-black dark:text-white"
                  />
                  <InputOTPSlot
                    index={1}
                    className="dark:bg-[#171717] text-black dark:text-white"
                  />
                  <InputOTPSlot
                    index={2}
                    className="dark:bg-[#171717] text-black dark:text-white"
                  />
                </InputOTPGroup>
                <InputOTPSeparator className="mx-2" />
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl dark:bg-[#171717]">
                  <InputOTPSlot
                    index={3}
                    className="dark:bg-[#171717] text-black dark:text-white"
                  />
                  <InputOTPSlot
                    index={4}
                    className="dark:bg-[#171717] text-black dark:text-white"
                  />
                  <InputOTPSlot
                    index={5}
                    className="dark:bg-[#171717] text-black dark:text-white"
                  />
                </InputOTPGroup>
              </InputOTP>
              {state?.error && (
                <p className="text-red-500 text-sm mt-2">{state.error}</p>
              )}
            </Field>
          </CardContent>
          <CardFooter className="dark:bg-[#1E1E1E]">
            <Field>
              <Button
                type="submit"
                size={"lg"}
                className="cursor-pointer w-full hover:bg-lightBlue hover:dark:bg-darkBlue bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20  p-4"
              >
                Verify
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
