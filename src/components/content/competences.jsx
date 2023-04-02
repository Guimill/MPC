import { CompetenceData } from "../data/competencesData";

export default function Competences() {

  return (
    <div>
        {CompetenceData.map(({ nom, outils, id }) => (
          <ul className="paragraphe" key={id}>
            <li className="paragraphe__topParagraphe">{nom}</li>
            <li className="paragraphe__bottomParagraphe">{outils}</li>
          </ul>
        ))}
    </div>
);
}