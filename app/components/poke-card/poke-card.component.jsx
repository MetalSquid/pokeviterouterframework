import "./poke-card.styles.css";

export default function PokeCard({ pokemon }) {
  return (
    <div className="poke-card-container">
      <img
        className="card-background-image"
        src={pokemon.imageUrl}
        alt={pokemon.title}
      />

      <h3>{pokemon.title}</h3>
      <p>${pokemon.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
