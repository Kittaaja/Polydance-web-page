import "./infocard.css";

function InfoCard({date, title, text}) {
  
  const eventDate = new Date(date);
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);
  const isOld = eventDate.getTime() < oneMonthAgo.getTime();
  const statusText = isOld ? "PAST" : "NEW";
  
  const statusClass = isOld
    ? "info-card__status h4 info-card__status--past"
    : "info-card__status h4 info-card__status--new";

  return (
    <article className="info-card">
      <div className="info-card__header">
        <div className={statusClass}>
          {statusText}
        </div>
        
        <div className="info-card__meta">
          <img src="/calendar-icon.svg" alt="" className="info-card__icon" />
          <span className="p">{date}</span>
        </div>
      </div>

      <div className="info-card__body">
        <h3 className="h3 info-card__title">{title}</h3>
        <p className="p info-card__text">{text}</p>
      </div>
    </article>
  );
}

export default InfoCard;