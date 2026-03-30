import { Form } from "react-router";
import { useActionData } from "react-router";

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
