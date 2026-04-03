import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.component.jsx"),
  route("/signup", "routes/signup/signup.component.jsx"),
  route("/login", "routes/login/login.component.jsx"),
  route("/store/:type", "routes/store/$type.jsx"),
  route("/cart", "routes/cart/cart.component.jsx"),
  route("/checkout", "routes/checkout/checkout.component.jsx"),
] satisfies RouteConfig;
