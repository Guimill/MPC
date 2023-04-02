import { useRouteError } from "react-router-dom";
import Header from '../components/header'
import Navbar from '../components/navbar';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <div className="paragraphe">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <b>{error.statusText || error.message}</b>
                </div>
            </main>
        </>
    );
}