import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ handleLoginClick, handleSearch, isLoggedIn, handleLogout }) {
  return (
    <header className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <div className="header__container">
        <section className="header__headers">
          <h1 className="header__header-top">
            What&apos;s going on in the world?
          </h1>
          <p className="header__header-bottom">
            Find the latest news on any topic and save them in your personal
            account
          </p>
        </section>
        <SearchForm handleSearch={handleSearch} />
      </div>
    </header>
  );
}

export default Header;
