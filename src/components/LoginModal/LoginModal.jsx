import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ onCloseModal, handleLogin, isOpen, handleAltClick }) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace("login-", ""); // Strip "update-" to match the state keys
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <div>
      <ModalWithForm
        title="Sign in"
        buttonText="Sign in"
        altButtonText="or Sign Up"
        isOpen={isOpen}
        onClose={onCloseModal}
        handleSubmit={handleSubmit}
        handleAltClick={handleAltClick}
      >
        <label htmlFor="login-email" className="modal__form-label">
          Email
        </label>
        <input
          type="email"
          className="modal__form-input"
          id="login-email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="login-email" className="modal__form-label">
          Password
        </label>
        <input
          type="password"
          className="modal__form-input"
          id="login-password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleChange}
        />
      </ModalWithForm>
    </div>
  );
}
export default LoginModal;

{
  /* <button
type="button"
onClick={handleRegisterClick}
className="modal__register-link"
>
or Sign Up
</button> */
}
