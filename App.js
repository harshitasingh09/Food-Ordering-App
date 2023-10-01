import React from 'react';
import ReactDOM from "react-dom/client"

//header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-containes">
        <img
          className="logo"
          src="https://seeklogo.com/images/F/foodx-online-food-ordering-system-logo-145CB16578-seeklogo.com.png"
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

//body Component
const Body=()=>{
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          <ResturantCard
            resName="Meghna Foods"
            Cuisine="Indian, Italian, chinese"
            rating="4.4*"
          />
          <ResturantCard
            resName="KFC"
            Cuisine="Burger, Fast Food"
            rating="3.8*"
          />
          <ResturantCard />
          <ResturantCard />
        </div>
      </div>
    );
}

//Resturant Card Component
const ResturantCard=(props)=>{
    return(
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img className='res-logo' src='https://im.indiatimes.in/content/2021/Jul/jalebi_6104fd511cc99.jpg?w=820&h=540&cc=1'/>
            <h3>{props.resName}</h3>
            <h4>{props.Cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>38 minutes</h4>

        </div>
    )
}


// main component
const AppLayout =()=>{
return(
    <div className="app">
<Header/>
<Body/>
    </div>
)
}


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);

