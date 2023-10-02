import { useState } from "react";

const SearchBox = (filteredRestaurant) => {
    

   
  const [searchText, setSearchText] = useState("");

// console.log("search rerender")
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="seacrh for taste"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // console.log(serchText);
          }}
        />
        <button className="search-btn" >Search</button>
      </div>
    </>
  );
};

export default SearchBox;
