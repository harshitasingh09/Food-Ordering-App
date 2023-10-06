import { CDN_LINK } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}= props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,areaName}= resData.info;
    return(
        <div className='m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200' >
            <img className='rounded-lg w-[230] h-[180]' src={CDN_LINK+cloudinaryImageId}/>
            <h3 className="font-bold py-1 px-1">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4 className="font-bold">*{avgRating}</h4>

        </div>
    )
}

export default RestaurantCard;