import { Link } from "react-router-dom";
import Card from "../card";
import { ArticlesData } from "../../data/articlesData";

export default function ArticlesGallery() {
  return (
    <div className="articlesGallery">
      {ArticlesData.map(({ id, src, name, description, url }) => (
        <div key={id}>
          <Link to={"/articles/" + url}>
            <Card name={name} src={src} description={description}/>
          </Link>
        </div>
      ))}
     </div>
  );
}