import React, {useState} from "react";
import AccordianItemList from "./AccordianItemList";

const RestaurantItemCategory = ({ data }) => {
  
  const [showItem, setShowItem]=useState(false);

  const handleClick=()=>{
    setShowItem(!showItem);
  }

  return (
    <div className="w-6/12 mx-auto my-2 p-4 bg-slate-100 shadow-lg">
      <div className="flex justify-between cursor-pointer"  onClick={handleClick}>
        <span className="font-bold">
          {data.title}({data.itemCards.length})
        </span>
        <span className="">⬇</span>
      </div>
   {showItem &&   <AccordianItemList items={data.itemCards}/>}
    </div>
  );
};

export default RestaurantItemCategory;
