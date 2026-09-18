import { verifyOtp } from "@/app/actions/qr";

export default function VerifyOtp() {
  return (
    <div>
      <form action={verifyOtp}>
        <input type="hidden" name="next" value="/" />
        <input
          name="code"
          placeholder="Enter 6-digit code"
          maxLength={6}
          autoFocus
        />
        <button type="submit">Unlock</button>
      </form>
    </div>
  );
}
