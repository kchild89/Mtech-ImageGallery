import React from "react";

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.urls.full} alt={image.alt_description} />
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
