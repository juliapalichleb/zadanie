import { useContext } from "react";
import { userContext } from "../../Contex/Contex";

const ButtonDelete = ({ userToDeleted }) => {
    const { setDeletedUser, setIsClicked } = useContext(userContext);

    const handleClick = () => {
        setDeletedUser(userToDeleted);
        setIsClicked(true);
    }
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default ButtonDelete;
