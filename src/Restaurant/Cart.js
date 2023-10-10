import { useDispatch, useSelector } from "react-redux";
import AccordianItemList from "./AccordianItemList";
import { clearCart } from "../utils/Store/cartSlice";

const Cart = () => {
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch =useDispatch();


    const handleClearCart=()=>{
        dispatch(clearCart());
      
     }


  return (
    <>
      <div className="cursor-pointer text-center m-4 p-4">
        <div className="text-2xl font-bold">cart</div>
        <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
       
        <div className="w-6/12 mx-auto flex">
            {cartItems.length===0 && <h1>Cart is empty</h1>}
           <AccordianItemList items={cartItems}/>
           {/* <button>Delete</button> */}
        </div>
        
      
      </div>
    </>
  );
};

export default Cart;