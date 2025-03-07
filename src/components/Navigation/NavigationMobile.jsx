import "./NavigationMobile.css";
import { NavLink, useLocation } from "react-router-dom";
import logout from "../../assets/logout.svg";

function NavigationMobile({
  onCloseModal,
  isLoggedIn,
  handleLoginClick,
  handleLogout,
  isOpen,
}) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <div className={`navigation-mobile ${isOpen ? "modal_visible" : ""}`}>
      <div className="navigation-mobile__modal">
        <div className="navigation-mobile__header">
          <NavLink
            to="/"
            className={`navigation-mobile__logo ${
              isSavedNewsPage ? "navigation__logo--saved-news" : ""
            }`}
          >
            NewsExplorer
          </NavLink>
          <button
            type="button"
            className="navigation-mobile__close"
            onClick={onCloseModal}
          ></button>
        </div>
        <div className="navigation-mobile__not-logged-in">
          <NavLink to="/" className="navigation-mobile__home">
            Home
          </NavLink>
          {!isLoggedIn ? (
            <button
              onClick={handleLoginClick}
              type="button"
              className="navigation-mobile__sign_in"
            >
              Sign In
            </button>
          ) : (
            <>
              <NavLink
                to="/saved-news"
                className="navigation-mobile__saved-news"
              >
                Saved Articles
              </NavLink>
              <button
                // type="submit"
                // onClick={handleLogOut}
                className="navigation-mobile__logout"
                onClick={handleLogout}
              >
                Elise
                <img
                  src={logout}
                  alt="logout icon"
                  className="navigation-mobile__logout-img"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationMobile;
