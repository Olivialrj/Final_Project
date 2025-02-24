import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import menu from "../../assets/menu.svg";
import menuDark from "../../assets/menu-dark.svg";
import logout from "../../assets/logout.svg";
import logoutDark from "../../assets/logoout-black.svg";

import "./Navigation.css";

function Navigation({
  handleLoginClick,
  isLoggedIn,
  handleLogout,
  handleNavigationMobile,
}) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 787 });

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

        {isMobile ? (
          <nav className="navigation__mobile">
            <button
              type="button"
              className="navigation__menu-button"
              onClick={handleNavigationMobile}
            >
              <img src={isSavedNewsPage ? menuDark : menu} alt="Menu" />
            </button>
          </nav>
        ) : (
          <nav className="navigation__not-logged-in">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navigation__home ${
                  isActive ? "navigation__home--active" : ""
                } ${isSavedNewsPage ? "navigation__home--saved-news" : ""}`
              }
            >
              Home
            </NavLink>
            {!isLoggedIn ? (
              <button
                onClick={handleLoginClick}
                type="button"
                className="navigation__sign-in"
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
                      isSavedNewsPage
                        ? "navigation__saved-news--saved-news"
                        : ""
                    }`
                  }
                >
                  Saved Articles
                </NavLink>
                <button
                  className={`navigation__logout ${
                    isSavedNewsPage ? "navigation__logout--saved-news" : ""
                  }`}
                  onClick={handleLogout}
                >
                  Elise
                  <img
                    src={isSavedNewsPage ? logoutDark : logout}
                    alt="Logout"
                    className="navigation__logout-img"
                  />
                </button>
              </>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navigation;
