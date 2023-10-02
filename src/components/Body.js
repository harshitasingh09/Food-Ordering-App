import RestaurantCard from "./ReastaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant]= useState([]);


    useEffect(() => {
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data =await fetch(
         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
         const json= await data.json();
        const shortedData =json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
        console.log(shortedData);
         setListOfRestaurant(shortedData);
    }
   

    const handleFilter = () => {
      const newRestaurant = listOfRestaurant.filter(
        (res) => res.info.avgRating > 4
      );
      console.log(newRestaurant)
      setListOfRestaurant(newRestaurant);
    };

  return listOfRestaurant.length===0 ? (<Shimmer/>) :(
    <div className="body">
      <button className="filter-btn"
       onClick={handleFilter}>
        Top Rated Reastaurants
        </button>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;