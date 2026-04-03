import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signUpEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
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
  const displayName = formData.get('displayName');

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  try {
    const {user} = await signUpEmailAndPassword(email, password);

    await createUserDocumentFromAuth(user,{displayName});

    return redirect("/");
  } catch (err) {
    return { error: err.message };
  }
}
