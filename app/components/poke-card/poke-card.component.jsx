import "./poke-card.styles.css";
import { useCart } from "../../context/cart.context";

export default function PokeCard({ pokemon }) {
  const { addItemToCart } = useCart();
  const { title, imageUrl, price } = pokemon;

  return (
    <div className="poke-card-container">
      <img
        className="card-background-image"
        src={imageUrl}
        alt={title}
      />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={() => addItemToCart(pokemon)}>Add to Cart</button>
    </div>
  );
}