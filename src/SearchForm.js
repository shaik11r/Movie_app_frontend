import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { query, setQuery, error } = useGlobalContext();
  const [inputvalue, setInputValue] = useState("");
  const handleinput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputvalue.trim() === "") {
      <div>
        <h2>please enter a search</h2>
      </div>;
    } else {
      setQuery(inputvalue);
    }
  };
  console.log(query);
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={inputvalue}
        onChange={handleinput}
      ></input>
      <button className="button-v" type="submit">
        Search
      </button>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
}

export default SearchForm;
