import Header from "../components/Header"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Outlet } from "react-router-dom"

export default function Index() {

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )

}