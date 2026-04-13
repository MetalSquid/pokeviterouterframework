import { redirect } from "react-router";
import { getCurrentUser } from "../../utils/firebase.utils";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.css";

export default function Checkout() {
  return (
    <div className="checkout-container">
      <CheckoutItem />
    </div>
  );
}

export function clientLoader() {
  const user = getCurrentUser();
  if (!user) return redirect("/confirmation-page");
  return null;
}

