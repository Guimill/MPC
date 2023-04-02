import Header from '../components/header';
import Navbar from '../components/navbar';
import Guillaume from '../assets/img/Milleret_Guillaume.png';
import Footer from '../components/footer';

export default function Accueil() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <div className='paragraphe'>
          <div style={{ display: "flex", flexFlow: "row", alignItems: "center", justifyContent: "center" }} >
            <img style={{ width: "21vw", height: "42vh" }} src={Guillaume} alt="Ma personne" />
            <p style={{ fontSize: "3vh", width: "60%", textAlign: "start", marginLeft: "4vw" }} className='paragraphe__topParagraphe'>
              Je suis un ecologue et geographe qui cherche a developper des outils
              d'aide a la decision dans l'urbanisme, dans la gestion des espaces riches en biodiversite et grand paysage.
              Le tout en usant de technologies repandu et inclusives, c'est pourquoi je veux mettre mon expertise dans des applications
              native et web
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}