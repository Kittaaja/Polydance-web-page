import { useState } from "react";
import "./workshopcard.css";

function WorkshopCard({image, title, date, teacher, description, teacherbio, images }) {
  const workshopDate = new Date(date);
  const today = new Date();
  const isPast = workshopDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
  const status = isPast ? "past" : "upcoming";
  const statusClass = isPast
    ? "workshop-card__status h4 workshop-card__status--past"
    : "workshop-card__status h4 workshop-card__status--upcoming";

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      openModal();
    }
  };

  return (
    <>
      <article
        className="workshop-card"
        role="button"
        tabIndex={0}
        onClick={openModal}
        onKeyDown={handleKeyDown}
      >
        <div className="workshop-card__media">
          <img src={`/workshop${image}`} alt={title} className="workshop-card__image" />
          <span className={statusClass}>{status.toUpperCase()}</span>
        </div>

        <div className="workshop-card__body">
          <div className="workshop-card__meta">
            <img src="/calendar-icon.svg" alt="Calendar" className="workshop-card__icon" />
            <span className="p-accent" style={{ fontSize: "20px" }}>{date}</span>
          </div>
          <h2 className="h2 workshop-card__title">{title}</h2>
          <p className="p workshop-card__teacher">With {teacher}</p>
        </div>
      </article>

      {isOpen && (
        <div className="workshop-card__modal-overlay" onClick={closeModal}>
          <div
            className="workshop-card__modal"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="workshop-card__modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="workshop-card__modal-media">
              <img src={`/workshop${image}`} alt={title} className="workshop-card__modal-image" />
            </div>

            <div className="workshop-card__modal-content">
              <h2 className="h2 workshop-card__modal-title">{title}</h2>
              <p className="p workshop-card__modal-text">With {teacher}</p>
              <p className="p workshop-card__modal-text">{description}</p>
              {teacherbio && (
                  <div>
                    <h3 className="h3 workshop-card__modal-title">{teacher}</h3>
                    <p className="p workshop-card__modal-text">{teacherbio}</p>
                  </div>
                )}              
              <div className="workshop-card__modal-images">
                {images && images.map((imgSrc, index) => (
                  <img key={index} src={`/workshop${imgSrc}`} alt={`${title} ${index + 1}`} className="workshop-card__modal-image" />
                ))
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkshopCard;
