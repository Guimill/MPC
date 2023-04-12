import { useState } from "react";

export default function Contact() {

    const FORM_ENDPOINT = "https://public.herotofu.com/v1/2acc4e80-d935-11ed-b656-837b57be60e0"

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {

        setTimeout(() => {

            setSubmitted(true);

        }, 100);

    };


    if (submitted) {

        return (

            <>
                <div class="afterContact">
                    <h2>Merci pour votre commentaire !</h2>
                    <p>Je vais essayer de vous répondre au max sous trois jours</p>
                </div>
            </>

        );

    }

    return (
        <>
            <form action={FORM_ENDPOINT} method="POST" accept-charset="UTF-8" onSubmit={handleSubmit} target="_blank">
                <fieldset>
                    <legend>Une question ?!</legend>
                    <p>
                        <input type="text" name="name" placeholder="Nom" required />
                        <input type="email" name="email" placeholder="Mail" required />
                    </p>
                    <br />
                    <textarea name="message" rows="8" cols="80" placeholder="Dites moi tout :3" required />
                    <br />
                    <div style={{ width: "fit-content" }}>
                        <input id="send" type="submit" name="submit" value="Envoyer" />
                        <div style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
                            <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    )

}