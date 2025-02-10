import { NavLink, useLocation } from "react-router-dom";
import logout from "../../assets/logout.svg";
import logoutDark from "../../assets/logoout-black.svg";

import "./Navigation.css";

function Navigation({ handleLoginClick, isLoggedIn, handleLogout }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <div
      className={`navigation ${
        isSavedNewsPage ? "navigation--saved-news" : ""
      }`}
    >
      <div className="navigation__block">
        <NavLink
          to="/"
          className={`navigation__logo ${
            isSavedNewsPage ? "navigation__logo--saved-news" : ""
          }`}
        >
          NewsExplorer
        </NavLink>
        <div className="navigation__not_logged_in">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `navigation__home ${isActive ? "navigation__home--active" : ""} ${
                isSavedNewsPage ? "navigation__home--saved-news" : ""
              }`
            }
          >
            Home
          </NavLink>
          {!isLoggedIn ? (
            <button
              onClick={handleLoginClick}
              type="button"
              className="navigation__sign_in"
            >
              Sign In
            </button>
          ) : (
            <>
              <NavLink
                to="/saved-news"
                className={({ isActive }) =>
                  `navigation__saved-news ${
                    isActive ? "navigation__saved-news--active" : ""
                  } ${
                    isSavedNewsPage ? "navigation__saved-news--saved-news" : ""
                  }`
                }
              >
                Saved Articles
              </NavLink>
              <button
                // type="submit"
                // onClick={handleLogOut}
                className={`navigation__logout ${
                  isSavedNewsPage ? "navigation__logout--saved-news" : ""
                }`}
                onClick={handleLogout}
              >
                Olivia
                <img
                  src={isSavedNewsPage ? logoutDark : logout}
                  alt="logout icon"
                  className="navigation__logout-img"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
