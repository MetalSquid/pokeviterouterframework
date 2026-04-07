import { useCart } from "../../context/cart.context";
import CartItem from "../../components/cart-item/cart-item.component";
import "./cart.styles.css";

export default function CartPage() {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-total">
            <span>Total: ${cartTotal}</span>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
