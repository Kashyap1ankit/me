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
  return (
    <div className="min-h-screen flex items-center">
      <Card className="mx-auto max-w-md border ">
        <CardHeader>
          <CardTitle>Verify your login</CardTitle>
          <CardDescription>
            Enter the verification code from google authenticator
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="otp-verification">
                Verification code
              </FieldLabel>
            </div>
            <InputOTP maxLength={6} id="otp-verification" required>
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator className="mx-2" />
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </CardContent>
        <CardFooter>
          <Field>
            <Button
              type="submit"
              className="cursor-pointer w-full hover:bg-lightBlue hover:dark:bg-darkBlue bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20  p-4"
            >
              Verify
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
