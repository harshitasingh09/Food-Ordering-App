import { CDN_LINK } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}= props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,areaName}= resData.info;
    return(
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img className='res-logo' src={CDN_LINK+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>

        </div>
    )
}

export default RestaurantCard;