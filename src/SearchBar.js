import { useState } from "react";
import Results from "./Results";
function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by title"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Results search={search} setSearch={setSearch} />
    </div>
  );
}

export default SearchBar;
