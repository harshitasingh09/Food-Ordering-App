import { LOGO_LINK } from "../utils/constants";
import {useState} from 'react';
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import { ONLINE_LOGO,OFFLINE_LOGO } from "../utils/constants";

const Header = () => {
  const [loginButton, setLoginButton]= useState('Login');
  const onlineStatus= useOnlineStatus();

  const handleLogin=()=>{
   return loginButton==='Login'? setLoginButton('Logout'): setLoginButton('Login');

   useEffect(()=>{

   },[])
    
  }
    return (
      <div className="header">
        <div className="logo-containes">
          <img
            className="logo"
            src={LOGO_LINK}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status{onlineStatus? <img className="online" src={ONLINE_LOGO}/>:<img className="offline" src={OFFLINE_LOGO}/>}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={handleLogin}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;