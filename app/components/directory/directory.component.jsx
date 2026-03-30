import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.css"

const categories = [
  {
    id: 1,
    title: "Water",
    route: "/store/water",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/134.png",
  },
  {
    id: 2,
    title: "Grass",
    route: "/store/grass",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png",
  },
  {
    id: 3,
    title: "Electric",
    route: "/store/electric",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
  },
  {
    id: 4,
    title: "Fire",
    route: "/store/fire",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
  },
  {
    id: 5,
    title: "Fighting",
    route: "/store/Fighting",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/068.png",
  },
  {
    id: 6,
    title: "Psychic",
    route: "/store/psychic",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/150.png",
  },
  {
    id: 7,
    title: "Ghost",
    route: "/store/ghost",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/094.png",
  },
  {
    id: 8,
    title: "Dragon",
    route: "/store/dragon",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/149.png",
  },
];

export default function Directory() {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
