import { useState, useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  altButtonText,
  title,
  isOpen,
  onClose,
  handleSubmit,
  handleAltClick,
}) {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const form = document.querySelector(".modal__form");
    setIsFormValid(form?.checkValidity() || false);
  });

  return (
    <div className={`modal ${isOpen ? "modal_visible" : ""}`}>
      <div className="modal__container">
        <p className="modal__header">{title}</p>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        <form
          className="modal__form"
          onSubmit={handleSubmit}
          onChange={(e) => setIsFormValid(e.currentTarget.checkValidity())}
        >
          {children}
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
          <button
            type="button"
            onClick={handleAltClick}
            className="modal__button2"
          >
            {altButtonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
