import "./boardcard.css";

function BoardCard({ image, name, title }) {
  return (
    <article className="board-card">
      <div className="board-card__image-wrap">
        <img src={image} alt={name} className="board-card__image" />
      </div>
      <div className="board-card__details">
        <h3 className="h3 board-card__name">{name}</h3>
        <p className="p-accent board-card__title">{title}</p>
      </div>
    </article>
  );
}

export default BoardCard;
