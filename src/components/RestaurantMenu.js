import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utils/constants";

const ReastaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams();
  console.log(resId,'res');


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_API+resId );
    const json =await data.json()
  //  console.log(json);
    setResInfo(json.data);
    // console.log('json.data', json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
    
   
  };
  if(resInfo===null)return <Shimmer/>;
   
  const { name, costForTwoMessage, cuisines, avgRating} =
    resInfo?.cards[0].card.card.info;
    
  const { itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card;
  console.log("itemCard", itemCards);



  return(
    <>
      <div className="res-menu">
        <div className="menu">
          <h1>{name}</h1>
          <h3>{cuisines.join(',')} : {costForTwoMessage}</h3>
          <h3>Rating: *{avgRating}</h3>
          <h2>Menu</h2>
          <ul>{
            itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} -<b> Rs.</b>{item.card.info.price/100||item.card.info.defaultPrice/100}</li>)}
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li> */}
          </ul>
          
        </div>
      </div>
    </>
  );
};
export default ReastaurantMenu;
