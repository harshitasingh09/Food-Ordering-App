import { ERROR_LOGO } from "../utils/constants";
import {useRouteError} from 'react-router-dom';


const Error =()=>{
    const err= useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1>
                OPPS..!!
            </h1>
            <h2>Something went wrong</h2>
            <h2>{err.status}:{err.statusText}</h2>
            <div className="err-img"><img src={ERROR_LOGO}/></div>
        </div>
    )
}

export default Error;