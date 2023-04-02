import lisa from '../../assets/img/lisa.png'
import shiny from '../../assets/img/shiny.jpg'

export default function Realisations() {

  const aStyle = {
    textDecoration: "none",
    fontSize: "2.5vh",
    color: 'rgb(244, 147, 147)',
  };

    return (
      <div>
          <ul className="realisationParagraphe">
            <li className="paragraphe__topParagraphe">
              <a style={aStyle} href=" https://milleretg4progress.shinyapps.io/shinyapps/" target={"blank"}><img style={{height: "30vh", width: "20vw"}} src={shiny} alt="My simpsons voting app" />
              <p><b>Synthetiseur de fonctionnalitees des Zones Humides</b></p></a>
            </li>
            <li className="paragraphe__topParagraphe">
              <a style={aStyle} href="https://the-simpsons-politiscales.fr/" target={"blank"}><img style={{height: "30vh"}} src={lisa} alt="My shiny app" />
              <p><b>The Simpsons PolitiScale</b></p></a>
            </li>
          </ul>
      </div>
    );
  }