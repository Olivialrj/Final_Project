import { useState } from "react";
import notFound from "../../assets/not-found_v1.svg";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";

function Main({
  searchResults,
  isLoading,
  isLoggedIn,
  handleSavedNewsToggle,
  savedNews,
  errorMessage,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (!isLoading && (!searchResults || searchResults.length === 0)) {
    return null;
  }

  return (
    <main className={`main ${isLoading ? "main--loading" : "main--content"}`}>
      {" "}
      {isLoading ? (
        <>
          <Preloader />
          <p className="main__loader">Searching for articles...</p>
        </>
      ) : errorMessage ? (
        <>
          <div className="main__errors">
            <img
              src={notFound}
              alt="Not found icon"
              className="main__error-img"
            />
            <p className="main__error">Nothing Found</p>
            <p className="main__error2">
              Sorry, but nothing matched
              <br /> your search term.
            </p>
          </div>
        </>
      ) : (
        <>
          <ul className="main__list">
            {searchResults.slice(0, visibleCount).map((article, index) => {
              const isSaved = savedNews.some(
                (saved) => saved._id === article._id
              );
              return (
                <NewsCard
                  key={article._id}
                  image={article.urlToImage || "fallback-image.png"}
                  date={new Date(article.publishedAt).toLocaleDateString()}
                  title={article.title}
                  description={article.description}
                  source={article.source.name}
                  handleSaveNews={() => handleSavedNewsToggle(article)}
                  isLoggedIn={isLoggedIn}
                  isSaved={isSaved}
                  isSavedPage={false}
                />
              );
            })}
          </ul>
          {searchResults.length > visibleCount && (
            <button className="main__button" onClick={handleShowMore}>
              Show more
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default Main;
