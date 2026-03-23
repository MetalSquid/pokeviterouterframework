import { Form, useActionData, redirect } from "react-router";
import { signUpEmailAndPassword } from "../../utils/firebase.utils";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email);
  console.log(password)

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  try {
    await signUpEmailAndPassword(email, password);
    return redirect("/store");
  } catch (err) {
    return { error: err.message };
  }
}

export default function SignUpForm() {
  const data = useActionData();

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
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
        <button>Sign Up</button>
      </Form>
    </div>
  );
}
