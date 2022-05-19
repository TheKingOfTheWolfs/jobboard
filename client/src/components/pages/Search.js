import React from "react";

const Search = ({ setSearchKeyword }) => {
  return (
    <div className="search">
      <ul>
        <input placeholder="Position" type="text" onChange={(e) => setSearchKeyword(e.target.value)} />
        <input placeholder="Location" type="text" onChange={(e) => setSearchKeyword(e.target.value)} />
        <button>Search</button>
      </ul>
    </div>
  );
};

export default Search;