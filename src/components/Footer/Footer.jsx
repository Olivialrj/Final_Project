import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import facebook_logo from "../../assets/facebook_logo.svg";
import github_logo from "../../assets/github_logo.svg";
import "./footer.css";

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 320 });
  return (
    <footer className="footer">
      <p className="footer__header">© 2025 Supersite, Powered by News API</p>
      {isMobile ? (
        <div className="footer__nav">
          <div className="footer__nav-cat">
            <NavLink to="/" className="footer__home">
              Home
            </NavLink>
            <a
              href="https://tripleten.com"
              className="footer__tripleten"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__logos">
            <a
              href="https://github.com/Olivialrj/Final_Project"
              className="footer__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__logo"
                src={github_logo}
                alt="GitHub Logo"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              className="footer__facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__logo"
                src={facebook_logo}
                alt="Facebook Logo"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="footer__nav">
          <NavLink to="/" className="footer__home">
            Home
          </NavLink>
          <a
            href="https://tripleten.com"
            className="footer__tripleten"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
          <div className="footer__logos">
            <a
              href="https://github.com/Olivialrj/Final_Project"
              className="footer__github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__logo"
                src={github_logo}
                alt="GitHub Logo"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              className="footer__facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__logo"
                src={facebook_logo}
                alt="Facebook Logo"
              />
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
