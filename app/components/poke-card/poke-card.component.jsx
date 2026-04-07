import "./poke-card.styles.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export default function PokeCard({ pokemon }) {
  const addItemToCart = useContext(CartContext);

  return (
    <div className="poke-card-container">
      <img
        className="card-background-image"
        src={pokemon.imageUrl}
        alt={pokemon.title}
      />

      <h3>{pokemon.title}</h3>
      <p>${pokemon.price}</p>
      <button onClick={()=> addItemToCart(pokemon)}>Add to Cart</button>
    </div>
  );
}
