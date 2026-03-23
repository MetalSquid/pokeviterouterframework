import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

export default function SignUp() {
  return (
    <div className="signUp">
      <SignUpForm />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  return null
}