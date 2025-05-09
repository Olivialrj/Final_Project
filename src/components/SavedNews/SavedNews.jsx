import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNews.css";

function SavedNews({ savedNews, isLoggedIn }) {
  const keywords = Array.from(
    new Set(savedNews.map((article) => article.query))
  );
  const currentUser = useContext(CurrentUserContext);

  const displayedKeywords = keywords.slice(0, 2); // First 2 keywords
  const remainingCount = keywords.length - 2; // Count of remaining keywords

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <div className="savedNews">
        <section className="savedNews__header">
          <p className="savedNews__title">Saved Articles</p>
          <h1 className="savedNews__subtitle">
            {currentUser.username}, you have {savedNews.length} saved articles
          </h1>
          <p className="savedNews__keywords">
            By keywords: {displayedKeywords.join(", ")}
            {remainingCount > 0
              ? `, and ${remainingCount} other${remainingCount > 1 ? "s" : ""}`
              : ""}
          </p>
        </section>
        <ul className="savedNews__list">
          {savedNews.map((article) => {
            return (
              <NewsCard
                key={article._id}
                image={article.urlToImage}
                date={new Date(article.publishedAt).toLocaleDateString(
                  "en-US",
                  options
                )}
                title={article.title}
                description={article.description}
                source={article.source.name}
                isSavedPage={true}
                isLoggedIn={isLoggedIn}
                keyword={article.query}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SavedNews;
