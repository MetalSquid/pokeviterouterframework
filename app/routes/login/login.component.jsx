import LoginForm from "../../components/login-form/login-form.component";

export async function action({ request }) {
  const formData = await request.formData()
  const fname = formData.get("fname")
  const lname = formData.get("lname")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  return null
}


export default function Login() {
  return (
    <div className="login">
      <h2>Please login</h2>
      <LoginForm />
    </div>
  );
}
