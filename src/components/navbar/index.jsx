import { Link } from "react-router-dom"
import insta from '../../assets/img/instagram.png'
import tiktok from '../../assets/img/tiktok.png'

export default function Navbar() {

    return (
        <div className="navBar">
            <ul className="navBar__list">
                <li><a href="t"><img src={insta} alt="" /></a></li>
                <li><a href="t"><img src={tiktok} alt="" /></a></li>
                <li><Link to="articles"><button>Articles</button></Link></li>
                <li><Link to="qsj"><button>Qui suis-je</button></Link></li>
                <li><Link to="philosophie"><button>Philosophie</button></Link></li>
                <li><Link to="contact"><button>Contact</button></Link></li>
            </ul>
        </div>
    )

}