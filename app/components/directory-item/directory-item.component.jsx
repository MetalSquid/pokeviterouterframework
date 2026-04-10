import { Link } from "react-router";
import "./directory-item.styles.css";
import { TYPE_COLORS } from "../../data/colors-data";



export default function DirectoryItem({ category }) {
  const { imageUrl, title, route, name } = category;
  const color = TYPE_COLORS[title.toLowerCase()] || "#ccc";

  return (
    <Link
      to={route}
      className="directory-item-container"
      style={{ backgroundColor: color }}
    >
      <img className="background-image" src={imageUrl} alt={name} />
      <div className="directory-item-info">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </Link>
  );
}