import Link from "next/link";

export default function Signin() {
  return (
    <div>
      <h2>Sign In Page</h2>
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
      <Link href="/dashboard" id="wd-signin-link">
        Sign In
      </Link>
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign Up
      </Link>
    </div>
  );
}
