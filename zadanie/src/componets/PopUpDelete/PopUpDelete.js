import "./PopUpDelete.css"
const PopUpDelete = () => {

    return (
        <>
            <div className="container">
                <p>Are you sure you want to delete this user?</p>
                <div className="buttonContainer">
                    <div><button className="buttonPopup">YES</button></div>
                    <div><button className="buttonPopup">NO</button></div>
                </div>
            </div>
        </>
    )
}

export default PopUpDelete;