import { Link } from "react-router-dom"

export default function Banner() {

    return (
        <header>
            <Link to="/gallery">
                <p>
                    <h1>Mon petit coton</h1>
                    <h2>Le fait main Toulousain</h2>
                </p>
            </Link>
        </header>
    )

}