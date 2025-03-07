import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ onCloseModal, handleLogin, isOpen, handleAltClick }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace("login-", ""); // Strip "login-" to match the state keys

    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    // Validate email only
    if (key === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("Invalid email address.");
      } else {
        setError("");
      }
    }
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
          required
        />
        {error && <p className="modal__form-error">{error}</p>}
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
          required
        />
      </ModalWithForm>
    </div>
  );
}
export default LoginModal;
