import { Form, useActionData } from "react-router";
import "./login-form.styles.css";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const data = useActionData();

  return (
    <Form method="post">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>
      {data?.error && <p>{data.error}</p>}
      <div>
        <button type="submit" name="intent" value="login">
          Login
        </button>
      </div>
      <div className="divider">or</div>

      <button
        type="submit"
        name="intent"
        value="google"
        className="google-btn"
        formNoValidate
      >
        <FcGoogle />
        Sign in with Google
      </button>
    </Form>
  );
}
