import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" >Home</NavLink>
      {" | "}
      <NavLink to="/store">Store</NavLink>
      {" | "}
      <NavLink to="/login">Login</NavLink>
      {" | "}
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  )
}