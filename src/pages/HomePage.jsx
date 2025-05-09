import Header from "../components/Header/Header";
import { Divider } from "@mui/material";
import Main from "../components/Main/Main";
// import Dashboard from "../components/Dashboard/Dashboard";
import FeaturedNews from "../components/FeaturedNews/FeaturedNews";
import EditorsPick from "../components/EditorsPick/EditorsPick";
import Trending from "../components/Trending/Trending";
// import ExploreTopics from "../components/ExploreTopics/ExploreTopics";

function HomePage({
  handleLoginClick,
  handleSearch,
  isLoggedIn,
  handleLogout,
  searchResults,
  isLoading,
  errorMessage,
  handleSavedNewsToggle,
  savedNews,
  cards,
  setCards,
}) {
  return (
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
        errorMessage={errorMessage}
        isLoggedIn={isLoggedIn}
        handleSavedNewsToggle={handleSavedNewsToggle}
        savedNews={savedNews}
      />
      <FeaturedNews />
      <Divider sx={{ my: 6 }} />
      <EditorsPick />
      <Divider sx={{ my: 6 }} />
      <Trending />
      {/* <ExploreTopics /> */}
      {/* <Dashboard cards={cards} setCards={setCards} />*/}
    </>
  );
}

export default HomePage;
