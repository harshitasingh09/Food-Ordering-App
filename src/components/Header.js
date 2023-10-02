import { LOGO_LINK } from "../utils/constants";
import {useState} from 'react';

const Header = () => {
  const [loginButton, setLoginButton]= useState('Login');

  const handleLogin=()=>{
   return loginButton==='Login'? setLoginButton('Logout'): setLoginButton('Login');
    
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login" onClick={handleLogin}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;