import { LOGO_LINK } from "../utils/constants";
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import { ONLINE_LOGO,OFFLINE_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginButton, setLoginButton]= useState('Login');
  const onlineStatus= useOnlineStatus();
  const {loggedInUser}= useContext(UserContext);
  //console.log(userName,'userName');

  const handleLogin=()=>{
   return loginButton==='Login'? setLoginButton('Logout'): setLoginButton('Login');
   
    
  }
 
    return (
      <div className="flex justify-between bg-purple-300 shadow-lg">
        <div className="m-4">
          <img
            className="w-28 h-16 m-2 border-solid"
            src={LOGO_LINK}
          />
        </div>
        <div className="flex item-center">
          <ul className="m-4 p-4 flex flex-wrap text-border">
            <li className="m-1 p-2 flex bg-fixed ">Online Status{onlineStatus? <img className="w-8" src={ONLINE_LOGO}/>:<img className="offline" src={OFFLINE_LOGO}/>}</li>
            <li  className="m-1 p-2"><Link to='/'>Home</Link></li>
            <li className="m-1 p-2"><Link to='/about'>About Us</Link></li>
            <li className="m-1 p-2"><Link to='/contact'>Contact Us</Link></li>
            <li className="m-1 p-2"><Link to='/grocery'>Grocery</Link></li>
            <li className="m-1 p-2">Cart</li>
            <button className=" border bg-orange-400 w-20 h-10" onClick={handleLogin}>{loginButton}</button>
           <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;