import Navigation from "../components/Navigation/Navigation";
import SavedNews from "../components/SavedNews/SavedNews";

function SavedNewsPage({
  isLoggedIn,
  handleLoginClick,
  handleLogout,
  handleNavigationMobile,
  savedNews,
}) {
  return (
    <>
      <Navigation
        isLoggedIn={true}
        handleLoginClick={handleLoginClick}
        handleLogout={handleLogout}
        handleNavigationMobile={handleNavigationMobile}
      />
      <SavedNews savedNews={savedNews} isLoggedIn={isLoggedIn} />
    </>
  );
}

export default SavedNewsPage;
