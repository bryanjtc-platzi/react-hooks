import React, { useContext } from "react";
import "../styles/Search.css";
import ThemeContext from "../context/ThemeContext";

const Search = ({ search, searchInput, handleSearch }) => {
  const color = useContext(ThemeContext);

  return (
    <div className="Search">
      <input
        className={`Search_input Search_input-${color}`}
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
