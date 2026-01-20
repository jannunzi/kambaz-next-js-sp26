import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <h2>Sign Up Page</h2>
      <div>
        <label htmlFor="wd-username">Username</label>
        <br />
        <input
          id="wd-username"
          value="alice"
          type="text"
          title="Please enter your username"
          placeholder="e.g., johndoe"
        />
      </div>
      <div>
        <label htmlFor="wd-password">Password</label>
        <br />
        <input
          id="wd-password"
          value="123"
          type="password"
          title="Please enter your password"
          placeholder="Your password"
        />
      </div>
      <div>
        <label htmlFor="wd-verify-password">Verify Password</label>
        <br />
        <input
          id="wd-verify-password"
          value="123"
          type="password"
          title="Please enter your password again"
          placeholder="Your password again"
        />
      </div>
      <Link href="/account/profile" id="wd-signup-link">
        Sign Up
      </Link>
      <br />
      <Link href="/account/signin" id="wd-signin-link">
        Sign In
      </Link>
    </div>
  );
}
