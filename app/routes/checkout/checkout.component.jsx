import { requireAuth } from "../../utils/auth-guard";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.css";

export async function clientLoader() {
  await requireAuth();
  return null;
}

export default function Checkout() {
  return (
    <div className="checkout-container">
      <CheckoutItem />
    </div>
  );
}