import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SavedNews from "./components/SavedNews/SavedNews";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
// import CurrentUserContext from "./contexts/CurrentUserContexts";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import * as newsApi from "../utils/newsApi";
import * as auth from "../utils/auth";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import RegistrationConfirmationModal from "./components/RegistrationConfirmationModal/RegistrationConfirmationModal";
import NavigationMobile from "./components/Navigation/NavigationMobile";

function App() {
  //useState
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  //Modals
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleLoginClick = () => {
    setActiveModal("login");
  };
  const handleRegisterClick = () => {
    setActiveModal("register");
  };
  const handleNavigationMobile = () => {
    setActiveModal("navigation-mobile");
  };

  //Handle
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth.authorisation(email, password).then((data) => {
      setCurrentUser(data.user);
      setIsLoggedIn(true);
      closeActiveModal();
    });
  };

  const handleRegistration = ({ email, password, username }) => {
    auth
      .register(email, password, username)
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        setActiveModal("registrationConfirmation");
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearch = (query) => {
    setErrorMessage("");
    setIsLoading(true);
    newsApi
      .getNews(query.text)
      .then((data) => {
        setIsLoading(false);
        if (data.totalResults === 0) {
          setErrorMessage(true);
          setSearchResults([]);
        } else {
          // Update the articles with a unique _id
          const updatedResults = data.articles.map((article) => ({
            ...article,
            _id: article._id || uuidv4(), // Generate a UUID if no ID exists
            query: query.text,
          }));
          setSearchResults(updatedResults); // Set the updated results to state
        }
      })
      .catch((err) => {
        setErrorMessage(true);
        console.error(err);
      });
  };

  const handleSavedNewsToggle = (article) => {
    if (!isLoggedIn) return; // Only allow saving if the user is logged in
    setSavedNews((prev) => {
      const isAlreadySaved = prev.some((saved) => saved._id === article._id);
      if (isAlreadySaved) {
        return prev.filter((saved) => saved._id !== article._id);
      } else {
        return [...prev, article];
      }
    });
  };

  //useEffect
  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    if (activeModal) {
      document.addEventListener("keydown", handleEscapeKeyPress);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeModal]);

  useEffect(() => {
    const storedNews = localStorage.getItem("savedNews");
    if (storedNews) {
      setSavedNews(JSON.parse(storedNews));
    }
  }, []);

  // Update localStorage whenever savedNews changes
  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(savedNews));
  }, [savedNews]);

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  handleLoginClick={handleLoginClick}
                  handleSearch={handleSearch}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                  handleNavigationMobile={handleNavigationMobile}
                />
                <Main
                  searchResults={searchResults}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  isLoggedIn={isLoggedIn}
                  handleSavedNewsToggle={handleSavedNewsToggle}
                  savedNews={savedNews}
                />
                <About />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <>
                <Navigation
                  isLoggedIn={true}
                  handleLoginClick={handleLoginClick}
                  handleLogout={handleLogout}
                  handleNavigationMobile={handleNavigationMobile}
                />
                <SavedNews savedNews={savedNews} isLoggedIn={isLoggedIn} />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
      <LoginModal
        onCloseModal={closeActiveModal}
        handleLogin={handleLogin}
        isOpen={activeModal === "login"}
        handleAltClick={handleRegisterClick}
      />
      <RegisterModal
        onCloseModal={closeActiveModal}
        handleRegistration={handleRegistration}
        isOpen={activeModal === "register"}
        handleAltClick={handleLoginClick}
      />
      <RegistrationConfirmationModal
        onCloseModal={closeActiveModal}
        handleLoginClick={handleLoginClick}
        isOpen={activeModal === "registrationConfirmation"}
      />
      <NavigationMobile
        isLoggedIn={isLoggedIn}
        onCloseModal={closeActiveModal}
        handleLoginClick={handleLoginClick}
        handleLogout={handleLogout}
        isOpen={activeModal === "navigation-mobile"}
      />
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
