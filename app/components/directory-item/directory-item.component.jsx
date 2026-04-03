import { Link } from "react-router";
import "./directory-item.styles.css";

export default function DirectoryItem({category}){
    const {imageUrl, title, route } = category
    
    return (
        <Link to={route} className="directory-item-container">
            <img className="background-image" src={imageUrl}/>
            
                <h2>{title}</h2>
                <p>shop now</p>
            
        </Link>
    )
}