import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
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
        <label htmlFor="wd-dob">Date of birth</label>
        <br />
        <input
          id="wd-dob"
          value="123"
          type="date"
          title="Please enter your date of birth"
          placeholder="Your date of birth"
        />
      </div>
      <div>
        <label htmlFor="wd-role">Role</label>
        <br />
        <select id="wd-role" value="FACULTY" title="Please enter your role">
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>
      <button>Save</button>
      <br />
      <Link href="/account/signin" id="wd-profile-link">
        Sign Out
      </Link>
    </div>
  );
}
