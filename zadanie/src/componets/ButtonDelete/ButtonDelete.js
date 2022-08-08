import { useContext } from "react";
import { userContext } from "../../Contex/Contex";

const ButtonDelete = ({ userToDeleted }) => {
    const { setDeletedUser, setIsPopupOpen } = useContext(userContext);

    const handleClick = () => {
        setDeletedUser(userToDeleted);
        setIsPopupOpen(true)
    }

    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default ButtonDelete;
