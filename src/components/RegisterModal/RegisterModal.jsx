import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  onCloseModal,
  handleRegistration,
  isOpen,
  handleAltClick,
}) {
  const [data, setData] = useState({ email: "", password: "", username: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace("register-", ""); // Strip "update-" to match the state keys
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      altButtonText="or Sign in"
      isOpen={isOpen}
      onClose={onCloseModal}
      handleSubmit={handleSubmit}
      handleAltClick={handleAltClick}
    >
      <label htmlFor="register-email" className="modal__form-label">
        Email
      </label>
      <input
        type="email"
        className="modal__form-input"
        id="register-email"
        placeholder="Enter Email"
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor="register-password" className="modal__form-label">
        Password
      </label>
      <input
        type="password"
        className="modal__form-input"
        id="register-password"
        placeholder="Enter Password"
        value={data.password}
        onChange={handleChange}
      />
      <label htmlFor="register-username" className="modal__form-label">
        Username
      </label>
      <input
        type="text"
        className="modal__form-input"
        id="register-username"
        placeholder="Enter Username"
        value={data.username}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
