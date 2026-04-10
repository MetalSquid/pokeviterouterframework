import { SHOP_DATA } from "../../data/shop-data";
import { useLoaderData } from "react-router";
import "./type.styles.css";
import PokeGrid from "../../components/poke-grid/poke-grid.component";
import { TYPE_COLORS } from "../../data/colors-data";

export function clientLoader({ params }) {
  const type = params.type.toLowerCase();
  const items = SHOP_DATA[type];
  return { type, items };
}

export default function StoreTypePage() {
  const { type, items } = useLoaderData();
  const color = TYPE_COLORS[type] || "#f0f8ff";

  return (
    <div className="store-route-container" style={{ borderTop: `6px solid ${color}` }}>
      <h1 className="store-title" style={{ color: "var(--title-color, #333)" }}>
        {type.toUpperCase()} Pokémon
      </h1>
      <PokeGrid type={type} items={items} color={color} />
    </div>
  );
}