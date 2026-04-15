import { Form, useActionData } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import "./sign-up-form.styles.css";

export default function SignUpForm() {
  const data = useActionData();
  const [password, setPassword] = useState("");

  const criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <Form method="post">
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input id="displayName" name="displayName" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ul className="password-criteria">
            <li className={criteria.length ? "met" : ""}>
              At least 8 characters
            </li>
            <li className={criteria.uppercase ? "met" : ""}>
              At least one uppercase letter
            </li>
            <li className={criteria.number ? "met" : ""}>
              At least one number
            </li>
            <li className={criteria.special ? "met" : ""}>
              At least one special character (!@#$%^&*)
            </li>
          </ul>
        </div>
        {data?.error && <p>{data.error}</p>}
        <button type="submit" name="intent" value="signup">
          Sign Up
        </button>

        <div className="divider">or</div>

        <button
          type="submit"
          name="intent"
          value="google"
          className="google-btn"
          formNoValidate
        >
          <FcGoogle />
          Sign up with Google
        </button>
      </Form>
    </div>
  );
}
