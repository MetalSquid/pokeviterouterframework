import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.css";
import { CATEGORIES_DATA } from "../../data/category-data";

export default function Directory() {
  return (
    <div className="directory-container">
      {CATEGORIES_DATA.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
