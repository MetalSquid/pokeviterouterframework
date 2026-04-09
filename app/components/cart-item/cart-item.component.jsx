import "./cart-item.styles.css";
import { useCart } from "../../context/cart.context";

export default function CartItem({ item }) {
  const { title, price, description, imageUrl, quantity } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useCart();

  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={imageUrl} alt={title} />

      <div className="cart-item-info">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-description">{description}</p>

        <div className="cart-item-controls">
          <button onClick={() => removeItemFromCart(item)}>-</button>
          <span className="cart-item-quantity"> {quantity} </span>
          <button onClick={() => addItemToCart(item)}>+</button>
        </div>

        <span className="cart-item-total"> ${price * quantity}</span>
      </div>

      <button
        className="cart-item-remove"
        onClick={() => clearItemFromCart(item)}
      >
        ✕
      </button>
    </div>
  );
}
