import LoginForm from "../../components/login-form/login-form.component";
import {
  loggingOut,
  logInEmail,
  signInWithGoogle,
} from "../../utils/firebase.utils";
import { redirect } from "react-router";
import "./login.styles.css";

export default function Login() {
  return (
    <div className="login">
      <h2>Please login</h2>
      <LoginForm />
    </div>
  );
}

export async function clientAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  // LOGOUT should run without requiring email/password
  if (intent === "logout") {
    try {
      await loggingOut();
      return redirect("/login");
    } catch (err) {
      return { error: err.message };
    }
  }

  // LOGIN with GOOGLE
  if (intent === "google") {
    try {
      await signInWithGoogle();
      return redirect("/");
    } catch (err) {
      return { error: err.message };
    }
  }

  // LOGIN flow
  if (intent === "login") {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return { error: "Email and password are required." };
    }

    try {
      await logInEmail(email, password);
      return redirect("/");
    } catch (err) {
      return { error: err.message };
    }
  }

  return { error: "Unknown action." };
}
