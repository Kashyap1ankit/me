export default function VerifyOtp() {
  return (
    <div>
      <form method="POST" action="/verify-totp">
        <input type="hidden" name="next" value="/admin" />
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
