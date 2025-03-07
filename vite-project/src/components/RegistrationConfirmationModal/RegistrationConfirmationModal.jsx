import "./RegistrationConfirmationModal.css";

const RegistrationConfirmationModal = ({
  handleLoginClick,
  isOpen,
  onCloseModal,
}) => {
  return (
    <div
      className={`registrationConfirmation modal ${
        isOpen ? "modal_visible" : ""
      }`}
    >
      <div className="modal__container">
        <div className="modal__header">
          Registration successfully completed!
        </div>
        <button
          type="button"
          className="modal__close"
          onClick={onCloseModal}
        ></button>
        <button
          type="button"
          onClick={handleLoginClick}
          className="modal__login"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default RegistrationConfirmationModal;
