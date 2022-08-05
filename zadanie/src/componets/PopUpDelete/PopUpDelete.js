import "./PopUpDelete.css"
import { userContext } from "../../Contex/Contex";
import {useContext} from "react";

const PopUpDelete = () => {
    const { setPopUpButton,  isClicked, handlePopUp } = useContext(userContext);

    // toggleVisibility(prevState => !prevState);

    // const handleClick = (v) => setPopUpButton(v);

    if(!isClicked) return null;

    return (
        <>
            <div className="container">
                <p>Are you sure you want to delete this user?</p>
                <div className="buttonContainer">
                    <div>
                        <button onClick={() => handlePopUp(setPopUpButton(true))} className="buttonPopup">YES</button>
                        {/*<button onClick={() => handleClick(true)} className="buttonPopup">YES</button>*/}
                    </div>
                    <div><button onClick={() => handlePopUp(setPopUpButton(false))} className="buttonPopup">NO</button></div>
                    {/*<div><button onClick={() => handleClick(false)} className="buttonPopup">NO</button></div>*/}
                </div>
            </div>
        </>
    )
}

export default PopUpDelete;