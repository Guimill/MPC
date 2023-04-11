export default function Card({name, src, description}) {

    return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={src} alt={name} />
            </div>
    );
  }