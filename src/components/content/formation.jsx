import { FormationData } from "../data/formationData"
import DownloadButton from "../downloadButton";

export default function Formation() {

  return (
    <div>
      {FormationData.map(({ projets, diplome, intitule, ville, dateAdmission, specialisation, id, downloadLink, diplomeName }) => (
        <ul className="paragraphe" key={id}>
          <li className="paragraphe__topParagraphe">{diplome} - {dateAdmission} - {ville}</li>
          <li className="paragraphe__bottomParagraphe">{specialisation} {intitule}</li>
          <li>{projets}</li>
          <li><DownloadButton downloadLink={downloadLink} diplomeName={diplomeName} /></li>
        </ul>
      ))}
    </div>
  );
}