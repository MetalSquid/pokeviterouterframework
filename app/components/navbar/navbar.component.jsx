import { NavLink, Form } from "react-router";
import { useUser } from "../../context/user.context";
import { useCart } from "../../context/cart.context";
import "./navbar.styles.css";
import { useState } from "react";

export default function Navbar() {
  const { currentUser } = useUser();
  const { cartCount, cartItems, cartTotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      {currentUser ? (
        <>
          <span>Hi, {currentUser.displayName || currentUser.email}</span>
          <Form method="post" action="/login">
            <input type="hidden" name="intent" value="logout" />
            <button type="submit" className="logout-btn">
              Logout
            </button>
          </Form>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}

      <div
        className="cart-icon-container"
        onMouseEnter={() => setIsCartOpen(true)}
        onMouseLeave={() => setIsCartOpen(false)}
      >
        <NavLink to="/cart">Cart ({cartCount})</NavLink>

        {isCartOpen && (
          <div className="cart-dropdown">
            {cartItems.length === 0 ? (
              <p className="cart-dropdown-empty">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-dropdown-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-dropdown-item">
                      <img src={item.imageUrl} alt={item.title} />
                      <span>{item.title}</span>
                      <span>x{item.quantity}</span>
                      <span>${item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="cart-dropdown-total">
                  <span>Total: ${cartTotal}</span>
                  <NavLink to="/cart">View Cart</NavLink>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
