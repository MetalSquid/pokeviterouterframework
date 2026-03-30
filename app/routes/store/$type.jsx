import { SHOP_DATA } from "../../data/shop-data";
import { useLoaderData } from "react-router";
import "./type.styles.css";

export function loader({ params }) {
  const type = params.type.toLowerCase();

  const items = SHOP_DATA.filter(
    (pokemon) => pokemon.type.toLowerCase() === type
  );

  return { type, items };
}

export default function StoreTypePage() {
  const { type, items } = useLoaderData();

  return (
    <div className="store-type-page">
      <h1 className="store-title">{type.toUpperCase()} Pokémon</h1>

      <div className="pokemon-grid">
        {items.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.imageUrl} alt={pokemon.title} />
            <h3>{pokemon.title}</h3>
            <p>${pokemon.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
