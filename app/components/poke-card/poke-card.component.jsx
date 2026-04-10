import "./poke-card.styles.css";
import { useCart } from "../../context/cart.context";

export default function PokeCard({ pokemon, color }) {
  const { addItemToCart } = useCart();
  const { title, imageUrl, price } = pokemon;

  return (
    <div className="poke-card-container" style={{ backgroundColor: color }}>
      <img className="card-background-image" src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button className="poke-card-btn" onClick={() => addItemToCart(pokemon)}>
        Add to Cart
      </button>
    </div>
  );
}