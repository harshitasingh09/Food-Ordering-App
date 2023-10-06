import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";

const ReastaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId, "res");
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[0].card.card.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card;
  console.log("itemCard", itemCards);

  return (
    <>
      <div className="m-[50px] p-[50px]">
        <div className="m-4 p-4 w-[600px] ">
          <h1 className="font-bold py-1 px-1 ">{name}</h1>
          <h3>
            {cuisines.join(",")} : {costForTwoMessage}
          </h3>
          <h3>Rating: *{avgRating}</h3>
          <h2>Menu</h2>
          <ul className=" border-dashed">
            {itemCards.map((item) => (
              <li className="menu-item border-b border-gray-400 pb-4 mb-4" key={item.card.info.id}>
                {item.card.info.name} -<b> Rs.</b>
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ReastaurantMenu;
