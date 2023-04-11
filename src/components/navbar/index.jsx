import { Link } from "react-router-dom"
import insta from '../../assets/img/logo/instagram.png'
import tiktok from '../../assets/img/logo/tiktok.png'
import etsy from '../../assets/img/logo/etsy.png'


export default function Navbar() {

    return (
        <div className="navBar">
            <div className="navBar--top">
                <ul className="navBar__list">
                    <li><Link to="gallery"><button>Articles</button></Link></li>
                    <li><Link to="qsj"><button>Qui suis-je</button></Link></li>
                    <li><Link to="philosophie"><button>Philosophie</button></Link></li>
                    <li><Link to="contact"><button>Contact</button></Link></li>
                </ul>
            </div>
            <div className="navBar--bottom">
                <ul className="navBar__list">
                    <li><a href="https://www.instagram.com/mon_petit_coton/?igshid=ZDdkNTZiNTM%3D" target="blank" ><img src={insta} alt="" /></a></li>
                    <li><a href="https://www.tiktok.com/@monpetitcoton" target="blank"><img src={tiktok} alt="" /></a></li>
                    <li><a href="https://www.etsy.com/fr/shop/MonPtitCoton" target="blank"><img src={etsy} alt="" /></a></li>
                </ul>
            </div>
        </div>
    )

}