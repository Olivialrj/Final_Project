import "./NewsCard.css";

function NewsCard({
  image,
  date,
  title,
  description,
  source,
  handleSaveNews,
  handleDeleteNews,
  isLoggedIn,
  isSaved,
  isSavedPage,
  keyword,
}) {
  return (
    <div className="newsCard">
      {/* <div className="newsCard__modal"> */}
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="newsCard__link"
      ></a>
      <img src={image} alt={title} className="newsCard__img" />
      <div className="newsCard__save-container">
        {!isLoggedIn && !isSavedPage && (
          <div className="newsCard__prompt">Sign in to save articles</div>
        )}

        {isSavedPage && isLoggedIn && (
          <>
            <div className="newsCard__keyword">{keyword}</div>
            <div className="newsCard__prompt-remove">Removed from saved</div>
          </>
        )}
        {isSavedPage ? (
          <button
            type="button"
            onClick={handleDeleteNews}
            className="newsCard__delete-btn"
          ></button>
        ) : (
          <button
            type="button"
            onClick={handleSaveNews}
            className={`newsCard__save-btn ${
              isSaved ? "newsCard__save-btn_active" : ""
            }`}
          ></button>
        )}
      </div>
      <div className="newsCard__content">
        <p className="newsCard__date">{date}</p>
        <h2 className="newsCard__header">{title}</h2>
        <p className="newsCard__description">{description}</p>
        <p className="newsCard__source">{source}</p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default NewsCard;
