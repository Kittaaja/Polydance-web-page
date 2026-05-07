import { Link } from "react-router-dom";
import "./classcard.css";

function ClassCard({ image, title, description, id }) {
  return (
    <Link to={`/teacher#${id}`} className="class-card-link">
      <article className="class-card">
        <div className="class-card__image-wrap">
          <img
            src={image}
            alt={`${title} class`}
            className="class-card__image"
          />
        </div>
        <div className="class-card__text">
          <h2 className="h2">{title}</h2>
          <p className="p">{description}</p>
        </div>
      </article>
    </Link>
  );
}

export default ClassCard;