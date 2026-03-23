import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signUpEmailAndPassword } from "../../utils/firebase.utils";
import { redirect } from "react-router";


export default function SignUp() {
  return (
    <div className="signUp">
      <SignUpForm />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");


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