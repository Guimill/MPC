import Header from "../components/Header"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useRouteError } from "react-router-dom"

export default function Index() {

    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div>
                    <h1>Oops!</h1>
                    <p>Une petite erreur de parcours</p>
                    <b> {error.statusText || error.message} </b>
                </div>
            </main>
            <Footer />
        </>
    )

}