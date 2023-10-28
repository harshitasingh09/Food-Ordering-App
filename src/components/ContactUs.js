import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ContactUs=()=>{
    const {loggedInUser}=useContext(UserContext);
    return(
        <>
        <div className="contact">
            <><h1> hi...!!! {loggedInUser}</h1></>
            <div>
                please contact us for more queries.!!!

            </div>

        </div>
        </>
    )
}
export default ContactUs;