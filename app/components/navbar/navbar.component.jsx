import { NavLink } from "react-router"
import "./navbar.styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" >Home</NavLink>
      {" | "}
      <NavLink to="/login">Login</NavLink>
      {" | "}
      <NavLink to="/signup">Sign Up</NavLink>
      {" | "}
      <NavLink to="/cart">Cart</NavLink>
      {" | "}
      <NavLink to="/checkout">Checkout</NavLink>
    </nav>
  )
}