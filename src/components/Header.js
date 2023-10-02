import { LOGO_LINK } from "../utils/constants";
import {useState} from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  const [loginButton, setLoginButton]= useState('Login');

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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={handleLogin}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;