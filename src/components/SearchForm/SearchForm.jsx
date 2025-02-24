import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch }) {
  const [query, setQuery] = useState({ text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    console.log(query.text);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace("searchForm-", "");
    setQuery((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className="searchForm__modal">
      <form onSubmit={handleSubmit} className="searchForm__form">
        <input
          id="searchForm-text"
          type="text"
          value={query.text}
          onChange={handleChange}
          placeholder="Enter Topic"
          className="searchForm__input"
        />
        <button type="submit" className="searchForm__button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
