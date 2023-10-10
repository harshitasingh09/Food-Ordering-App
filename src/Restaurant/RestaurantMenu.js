import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";
import RestaurantItemCategory from "./RestaurantItemCategory";
import { useState } from "react";

const ReastaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  const [showIndex, setShowIndex]= useState();

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[0].card.card.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (i) =>
        i.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories, "categories");

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold py-1 px-1 my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")} : {costForTwoMessage}
        </p>

        {categories.map((c, index) => (
          <RestaurantItemCategory
            key={c.card?.card.title}
            data={c.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};
export default ReastaurantMenu;
