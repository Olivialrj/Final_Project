import { useState } from "react";
// import PhoneInput from "react-phone-number-input";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
// import "react-phone-number-input/style.css";

function LoginModal({ onCloseModal, handleLogin, isOpen, handleAltClick }) {
  const [data, setData] = useState({ email: "", password: "", number: "" });
  const [error, setError] = useState("");
  // const [country, setCountry] = useState("US");

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace("login-", ""); // Strip "login-" to match the state keys
    setData((prevState) => ({
      ...prevState, //copies everything in prevState using spread operator(...)
      [key]: value, // [] is computer property names , without it, it adds the property  key and not its actual value property name
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

  // useEffect(() => {
  //   const fetchCountry = async () => {
  //     try {
  //       const response = await fetch("http://ipapi.co/json/");
  //       const data = await response.json();
  //       setCountry(data.country_code);
  //     } catch (error) {
  //       console.error("Error fetching country:", error);
  //       setCountry("US");
  //     }
  //   };

  //   fetchCountry();
  // }, []);

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
        {/* <label htmlFor="login-number" className="modal__form-label">
          Mobile Number
        </label>
        <PhoneInput
          className="modal__form-input"
          id="login-number"
          placeholder="Enter number"
          value={data.number}
          onChange={(value) => setData((prev) => ({ ...prev, number: value }))}
          defaultCountry={country}
          international
          withCountryCallingCode
          countryCallingCodeEditable={false}
          // required
        />{" "} */}
      </ModalWithForm>
    </div>
  );
}
export default LoginModal;
