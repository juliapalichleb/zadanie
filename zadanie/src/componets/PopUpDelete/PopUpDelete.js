import { userContext } from "../../Contex/Contex";
import { useContext } from "react";

import "./PopUpDelete.css"

const PopUpDelete = () => {
    const { isPopupButton } = useContext(userContext);

    return (
        <div className="container">
            <p>Are you sure you want to delete this user?</p>
            <div className="buttonContainer">
                <div>
                    <button onClick={() => isPopupButton(true)} className="buttonPopup">YES</button>
                </div>
                <div>
                    <button onClick={() => isPopupButton(false)} className="buttonPopup">NO</button>
                </div>
            </div>
        </div>
    )
}

export default PopUpDelete;