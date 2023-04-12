import { Link } from "react-router-dom"

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
        </div>
    )

}