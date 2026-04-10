import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signUpAndUpdateProfile, signInWithGoogle } from "../../utils/firebase.utils";
import { redirect } from "react-router";
import "./signup.styles.css";

export default function SignUp() {
  return (
    <div className="signUp-container">
      <SignUpForm />
    </div>
  ); 
}

export async function clientAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "google") {
    try {
      await signInWithGoogle();
      return redirect("/");
    } catch (err) {
      return { error: err.message };
    }
  }

  if (intent === "signup") {
    const email = formData.get("email");
    const password = formData.get("password");
    const displayName = formData.get("displayName");

    if (!email || !password || !displayName) {
      return { error: "Email, password and display name are required." };
    }

    try {
      await signUpAndUpdateProfile(email, password, displayName);
      return redirect("/");
    } catch (err) {
      return { error: err.message };
    }
  }

  return { error: "Unknown action." };
}
