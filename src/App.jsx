import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SavedNews from "./components/savedNews/savedNews";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
// import CurrentUserContext from "./contexts/CurrentUserContexts";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import * as newsApi from "../utils/newsApi";
import * as auth from "../utils/auth";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  //useState
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedNews, setSavedNews] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }

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
        closeActiveModal();
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
        if (data.articles.length === 0) {
          setErrorMessage("Nothing Found");
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
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(
          "Sorry, something went wrong during the request. Please try again later."
        );
      });
  };

  const handleSavedNewsToggle = (article) => {
    if (!isLoggedIn) return; // Only allow saving if the user is logged in
    setSavedNews((prev) => {
      const isAlreadySaved = prev.some((saved) => saved._id === article._id);
      if (isAlreadySaved) {
        // Remove article if it's already saved
        return prev.filter((saved) => saved._id !== article._id);
      } else {
        // Add article to savedNews
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
                />
                <Main
                  searchResults={searchResults}
                  isLoading={isLoading}
                  // errorMessage={errorMessage}
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
                <Navigation isLoggedIn={true} />
                <SavedNews
                  savedNews={savedNews}
                  handleLoginClick={handleLoginClick}
                  isLoggedIn={isLoggedIn}
                />
              </>
            }
          />
          {/* <ProtectedRoute isLoggedIn={isLoggedIn}> */}
          {/* </ProtectedRoute> */}
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
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
