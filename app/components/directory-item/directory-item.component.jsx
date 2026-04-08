import { Link } from "react-router";
import "./directory-item.styles.css";

export default function DirectoryItem({ category }) {
  const { imageUrl, title, route, name } = category;

  return (
    <Link to={route} className="directory-item-container">
      <img className="background-image" src={imageUrl} alt={name} />
      <div className="directory-item-info">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </Link>
  );
}
