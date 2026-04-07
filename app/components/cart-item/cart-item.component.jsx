import "./cart-item.styles.css";
import { useCart } from "../../context/cart.context";

export default function CartItem({ item }) {
  const { title, price, description, imageUrl, quantity } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useCart();

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={title} />
      <div className="item-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="item-quantity">
          <button onClick={() => removeItemFromCart(item)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addItemToCart(item)}>+</button>
        </div>
        <span>${price * quantity}</span>
      </div>
      <button className="remove-btn" onClick={() => clearItemFromCart(item)}>
        ✕
      </button>
    </div>
  );
}
