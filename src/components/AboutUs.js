import React from "react";
import Slogan from "./Slogan";


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }


componentDidMount(){
    console.log("mounting parent");
};
componentDidUpdate(){
    console.log("updating Parent")
  }

  componentWillUnmount(){
    console.log("memory freed up.. Parent ")
  }

render(){
    return(
        <>
        <div>
            About Us
            <Slogan slogan={"Swiggy Karo, Phir Jo Chahe Karo!"}/>
        </div>
        </>
    )
}

  
}

export default AboutUs;