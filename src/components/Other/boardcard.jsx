import { useState } from "react";
import "./boardcard.css";

function BoardCard({ image, name, title, description }) {
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
      <article className="board-card">
        <div className="board-card__image-wrap">
          <img
            src={image}
            alt={name}
            className="board-card__image"
            onClick={openModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
          />
        </div>
        <div className="board-card__details">
          <h3 className="h3 board-card__name">{name}</h3>
          <p className="p-accent board-card__title">{title}</p>
        </div>
      </article>

      {isOpen && (
        <div className="board-card__modal-overlay" onClick={closeModal}>
          <div
            className="board-card__modal"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="board-card__modal-close" onClick={closeModal} aria-label="Close board member details">
              ×
            </button>

            <div className="board-card__modal-media">
              <img src={image} alt={name} className="board-card__modal-image" />
            </div>

            <div className="board-card__modal-content">
              <h2 id={`board-modal-title-${name.replace(/\s+/g, "-").toLowerCase()}`} className="h2 board-card__modal-name">{name}</h2>
              <p className="p-accent board-card__modal-title">{title}</p>
              <p className="p board-card__modal-description">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BoardCard;
