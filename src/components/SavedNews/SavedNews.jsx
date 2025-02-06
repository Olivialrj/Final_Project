import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedNews }) {
  const keywords = Array.from(
    new Set(savedNews.map((article) => article.query))
  );

  return (
    <>
      <div className="savedNews">
        <section className="savedNews__header">
          <p className="savedNews__title">Saved Articles</p>
          <h1 className="savedNews__subtitle">
            Elise, you have {savedNews.length} saved articles
          </h1>
          <p className="savedNews__keywords-label">
            By keywords: {keywords.join(", ")}
          </p>
        </section>
        <ul className="savedNews__list">
          {savedNews.map((article) => {
            return (
              <NewsCard
                key={article._id}
                image={article.urlToImage}
                date={article.date}
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
