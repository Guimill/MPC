import { Link } from "react-router-dom";
import Card from "../card";
import { ArticlesData } from "../../data/articlesData";

export default function ArticlesGallery() {
  return (
    <div className="articlesGallery">
      {ArticlesData.map(({ id, src, name, description }) => (
        <div key={id}>
          <Link to={"/articles/" + name}>
            <Card name={name} src={src} description={description}/>
          </Link>
        </div>
      ))}
     </div>
  );
}