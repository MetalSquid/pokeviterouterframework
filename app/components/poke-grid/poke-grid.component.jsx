import PokeCard from "../poke-card/poke-card.component";
import "./poke-grid.styles.css";

export default function PokeGrid({ items, color }) {
  return (
    <div className="poke-grid-container">
      {items.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} color={color} />
      ))}
    </div>
  );
}