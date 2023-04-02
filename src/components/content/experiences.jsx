import { ExperienceData } from "../data/experienceData";

export default function Experiences() {

  return (
    <div>
      {ExperienceData.map(({ nom, duree, intitule, ville, poste, id }) => (
        <ul className="paragraphe" key={id}>
          <li className="paragraphe__topParagraphe">{nom} - {duree} - {ville}</li>
          <li className="paragraphe__bottomParagraphe"><b style={{ color: "burlywood" }} >{poste}</b> <p>{intitule}</p></li>
        </ul>
      ))}
    </div>
  );
}