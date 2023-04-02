import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Navbar() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);

  const [buttonFormationDisabled, setButtonFormationDisabled] = useState(false);
  const [buttonExperiencesDisabled, setButtonExperiencesDisabled] = useState(false);
  const [ButtonRealisationDisabled, setButtonRealisationDisabled] = useState(false);
  const [ButtonCompetencesDisabled, setButtonCompetencesDisabled] = useState(false);


  return (
    <div className="navbar">
      <Link to={'/formation'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={buttonFormationDisabled}
          onClick={() => { setButtonFormationDisabled(true); setButtonExperiencesDisabled(false); setButtonRealisationDisabled(false); setButtonCompetencesDisabled(false) }}>
          Formation
        </button></Link>
      <Link to={'/experiences'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={buttonExperiencesDisabled}
          onClick={() => { setButtonExperiencesDisabled(true); setButtonRealisationDisabled(false); setButtonFormationDisabled(false); setButtonCompetencesDisabled(false) }}>
          Experiences
        </button></Link>
      <Link to={'/competences'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={ButtonCompetencesDisabled}
          onClick={() => { setButtonRealisationDisabled(false); setButtonExperiencesDisabled(false); setButtonFormationDisabled(false); setButtonCompetencesDisabled(true) }}>
          Competences
        </button></Link>
      <Link to={'/realisations'} onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}>
        <button disabled={ButtonRealisationDisabled}
          onClick={() => { setButtonRealisationDisabled(true); setButtonExperiencesDisabled(false); setButtonFormationDisabled(false); setButtonCompetencesDisabled(false) }}>
          Realisations
        </button></Link>
    </div>
  );
}