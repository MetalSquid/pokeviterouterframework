import "./checkout-item.styles.css";
import { Link, useNavigate } from "react-router";
import { useCart } from "../../context/cart.context";
import { getCurrentUser } from "../../utils/firebase.utils";

export default function CheckoutItem() {
  const { cartTotal, cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleConfirm = () => {
    clearCart();
    navigate("/confirmation-page");
  };

  if (!user) return null;

  if (cartItems.length === 0) {
    return (
      <div className="checkoutForm-container">
        <p>Your cart is empty.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="checkoutForm-container">
      <h1>Checkout</h1>
      <div className="checkout-items">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.imageUrl} alt={item.title} />
            <span>{item.title}</span>
            <span>x{item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="checkout-summary">
        <span>Shipping: Free</span>
        <span>Total: ${cartTotal}</span>
        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}