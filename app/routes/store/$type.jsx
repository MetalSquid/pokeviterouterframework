import { SHOP_DATA } from "../../data/shop-data";
import { useLoaderData } from "react-router";
import "./type.styles.css";
import PokeGrid from "../../components/poke-grid/poke-grid.component";

export function clientLoader({ params }) {
  const type = params.type.toLowerCase();

  const items = SHOP_DATA[type]

  return { type, items };
}

export default function StoreTypePage() {
  const { type, items } = useLoaderData();

  return(
  <div className="store-route-containter">
    <h1 className="store-title">{type.toUpperCase()} Pokémon</h1>
    <PokeGrid type={type} items={items} />;
  </div>)
}
