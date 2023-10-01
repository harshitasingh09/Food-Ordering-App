import { LOGO_LINK } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;