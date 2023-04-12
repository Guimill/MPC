import { Link } from "react-router-dom";
import { ArticlesData } from "../../data/articlesData";
import insta from '../../assets/img/logo/instagram.png'
import tiktok from '../../assets/img/logo/tiktok.png'
import etsy from '../../assets/img/logo/etsy.png'

export default function ArticlesGallery() {
  return (
    <>
        <div className="navBar--bottom">
          <ul className="navBar__list">
            <li><a href="https://www.instagram.com/mon_petit_coton/?igshid=ZDdkNTZiNTM%3D" target="blank" ><img src={insta} alt="" /></a></li>
            <li><a href="https://www.tiktok.com/@monpetitcoton" target="blank"><img src={tiktok} alt="" /></a></li>
            <li><a href="https://www.etsy.com/fr/shop/MonPtitCoton" target="blank"><img src={etsy} alt="" /></a></li>
          </ul>
        </div>
      <div className="articlesGallery">
        {ArticlesData.map(({ id, src, name, price, url }) => (
          <div key={id}>
            <Link to={"/articles/" + url}>
              <div>
                <img src={src} alt={name} />
                <h2>{name} - {price}€</h2>
              </div>
            </Link>
          </div>
        ))}
      </div></>
  );
}