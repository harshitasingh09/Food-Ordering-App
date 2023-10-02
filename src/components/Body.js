import RestaurantCard from "./ReastaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import SearchBox from "./SearchBox";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]= useState([]);
  const [searchText, setSearchText] = useState("");

 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const shortedData =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(shortedData);
    setListOfRestaurant(shortedData,"all");
    setFilteredRestaurant(shortedData);
  };

  const handleFilter = () => {
    const newRestaurant = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    console.log(newRestaurant);
    setFilteredRestaurant(newRestaurant);
  };

  const handlefilteredRestaurant=()=>{
const result = listOfRestaurant.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())));
console.log(result);
setFilteredRestaurant(result);
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="btn">
          <input
            type="text"
            placeholder="seacrh for taste"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
            className="search-btn"
            onClick={
              handlefilteredRestaurant
            }
          >
            Search
          </button>
          {/* <SearchBox /> */}
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Reastaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
