import RestaurantCard from "./ReastaurantCard";
import resList from "../utils/mockData";
import {useState} from 'react'

const Body = () => {

    const [topRestaurant, setTopRestaurant]= useState(resList);

    const handleFilter = () => {
      const newRestaurant = topRestaurant.filter(
        (res) => res.info.avgRating > 4
      );
      console.log(newRestaurant)
      setTopRestaurant(newRestaurant);
    };

  return (
    <div className="body">
      <button className="filter-btn"
       onClick={handleFilter}>
        Top Rated Reastaurants
        </button>
      <div className="res-container">
        {topRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;