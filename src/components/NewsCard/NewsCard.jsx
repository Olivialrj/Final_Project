import sample from "../../assets/sample-newscard.png";
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
      <img src={image} alt={title} className="newsCard__img" />
      <div className="newsCard__save-container">
        {!isLoggedIn && !isSavedPage && (
          <div className="newsCard__prompt">Sign in to save articles</div>
        )}

        {isSavedPage && isLoggedIn && (
          <>
            <div className="newsCard__keyword">{keyword}</div>
            <div className="newsCard__prompt2">Removed from saved</div>
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
        <p className="newsCard__title">{title}</p>
        <p className="newsCard__description">{description}</p>
        <p className="newsCard__source">{source}</p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default NewsCard;
