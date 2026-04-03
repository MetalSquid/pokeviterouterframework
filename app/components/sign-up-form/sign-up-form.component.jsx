import { Form, useActionData } from "react-router";

export default function SignUpForm() {
  const data = useActionData();

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <Form method="post">
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
        <button>Sign Up</button>
      </Form>
    </div>
  );
}
