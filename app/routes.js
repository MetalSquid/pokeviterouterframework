import { route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home/home.component.jsx"),
  route("/store", "routes/store/store.component.jsx"),
  route("/signup", "routes/signup/signup.component.jsx"),
  route("login", "routes/login/login.component.jsx"),
];
