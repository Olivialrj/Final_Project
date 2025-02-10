import { NavLink } from "react-router-dom";
import facebook_logo from "../../assets/facebook_logo.svg";
import github_logo from "../../assets/github_logo.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__header">2025 Supersite, Powered by News API</p>
      <div className="footer__nav">
        <NavLink to="/" className="footer__home">
          Home
        </NavLink>
        <NavLink to="/" className="footer__tripleten">
          TripleTen
        </NavLink>
        <div className="footer__logos">
          <NavLink to="/" className="footer__github">
            <img
              className="footer__logo"
              src={github_logo}
              alt="Github Logo"
            ></img>
          </NavLink>
          <NavLink to="/" className="footer__facebook">
            <img
              className="footer__logo"
              src={facebook_logo}
              alt="Facebook Logo"
            ></img>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
