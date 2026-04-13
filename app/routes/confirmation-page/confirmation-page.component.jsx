import { Link } from "react-router";
import { CheckCircle } from "lucide-react";
import "./confirmation-page.styles.css";

export default function OrderConfirmation() {
  return (
    <div className="order-confirmation-container">

      <div className="confirmation-card">

        <CheckCircle size={80} color="#ffcb05" strokeWidth={1.5} />
        <h1>Order Confirmed!</h1>
        <p>Thank you for your purchase. Your Pokémon are on their way!</p>

        <div className="confirmation-actions">
          <Link to="/" className="confirmation-btn">
            Back to Home
          </Link>
          <Link to="/store/water" className="confirmation-btn secondary">
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}
