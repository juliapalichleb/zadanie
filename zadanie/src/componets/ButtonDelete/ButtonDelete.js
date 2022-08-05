import { useContext } from "react";
import { userContext } from "../../Contex/Contex";

const ButtonDelete = ({ userToDeleted }) => {
const { updatedData, setUpdatedData } = useContext(userContext);

    const deleting = () => {
        const copy = updatedData;
        copy.splice(userToDeleted, 1)
        setUpdatedData(copy)
    }

    return (
        <button onClick={deleting}>Delete</button>
    )
}

export default ButtonDelete;
