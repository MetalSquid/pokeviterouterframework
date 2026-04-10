import { Form, useActionData } from "react-router";
import { GoogleIcon } from "../../assets/google-icon";
import "./sign-up-form.styles.css";

export default function SignUpForm() {
  const data = useActionData();

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
          />
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
          <GoogleIcon />
          Sign up with Google
        </button>
      </Form>
    </div>
  );
}
