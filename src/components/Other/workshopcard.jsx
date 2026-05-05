import "./workshopcard.css";


function WorkshopCard({ status = "upcoming", image, title, date, description }) {
  const statusClass = status === "past"
    ? "workshop-card__status h4 workshop-card__status--past"
    : "workshop-card__status h4 workshop-card__status--upcoming";

  return (
    <article className="workshop-card">
      <div className="workshop-card__media">
        <img src={image} alt={title} className="workshop-card__image" />
        <span className={statusClass}>{status.toUpperCase()}</span>
      </div>

      <div className="workshop-card__body">
        <div className="workshop-card__meta">
          <img src="/calendar-icon.svg" alt="Calendar" className="workshop-card__icon" />
          <span className="p-accent" style={{ fontSize: "20px" }}>{date}</span>
        </div>
        <h2 className="h2 workshop-card__title">{title}</h2>
        <p className="p workshop-card__description">{description}</p>
      </div>
    </article>
  );
}

export default WorkshopCard;
