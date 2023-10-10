
import { addItem } from "../utils/Store/cartSlice";
import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";

const AccordianItemList = ({ items }) => {

const dispatch= useDispatch();

  const handleAddItem =(item)=>{
    dispatch(addItem(item))
   }

  return (
    <div>
        {items.map((item)=>{
         return (
           <div
             className="m-4 p-1  border-b-2 text-left flex"
             key={item.card.info.id}
           >
             <div className="p-2 w-9/12">
               <span>{item.card.info.name}</span>
               <span>
                 -₹
                 {item.card.info.price / 100 ||
                   item.card.info.defaultPrice / 100}
               </span>
               <p className="text-xs mx-auto">{item.card.info.description}</p>
             </div>
             <div className="w-3/12 p-4 relative">
                <img className="w-28 h-auto" src={CDN_LINK+ item.card.info.imageId}/>
                <div className="absolute">
                <button 
                className="p-2 bg-white shadow-lg mx-10 absolute rounded-lg"
                onClick={()=>handleAddItem(item)}
                >
                  Add+
                </button>
                </div>
             </div>
           </div>
         );
        })}
    </div>
  );
};

export default AccordianItemList;
