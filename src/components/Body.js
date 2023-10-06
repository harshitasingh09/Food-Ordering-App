import RestaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
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
    setListOfRestaurant(shortedData, "all");
    setFilteredRestaurant(shortedData);
  };

  const handleFilter = () => {
    const newRestaurant = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    console.log(newRestaurant);
    setFilteredRestaurant(newRestaurant);
  };

  const handlefilteredRestaurant = () => {
    const result = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(result);
    setFilteredRestaurant(result);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> it seems you are offline</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="m-4 p-4 flex">
          <input
            type="text"
            placeholder="seacrh for taste"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-100 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />

          <button
            className="rounded-full border bg-slate-400 w-40"
            onClick={handlefilteredRestaurant}
          >
            Search
          </button>
          {/* <SearchBox /> */}
          <button
            className="rounded-full border bg-slate-400 w-80"
            onClick={handleFilter}
          >
            Top Rated Reastaurants
          </button>
        </div>
      </div>
      <div className="  flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
      
    </>
  );
};

export default Body;
