import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onInputChange = (event) => {
    setSearchQuery(event.target.value); //this function can also be written inline down at the input element//
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSearchQuerySubmit(searchQuery);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={searchQuery} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
