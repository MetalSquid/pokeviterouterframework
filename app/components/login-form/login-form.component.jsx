import { Form, useActionData } from "react-router";
import "./login-form.styles.css";

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
        </button>{" "}
      </div>
      <div>
        <button type="submit" name="intent" value="logout" formNoValidate>
          Sign Out
        </button>
      </div>
    </Form>
  );
}
