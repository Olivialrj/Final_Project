import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";

function Main({
  searchResults,
  isLoading,
  isLoggedIn,
  handleSavedNewsToggle,
  savedNews,
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
          <p className="main__loader">Searching for articles</p>
        </>
      ) : (
        <>
          <h2 className="main__header">Search</h2>
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
          {!isLoading && searchResults.length === 0 && (
            <p>No articles found.</p>
          )}
        </>
      )}
    </main>
  );
}

export default Main;
