import ButtonDelete from "../ButtonDelete/ButtonDelete";

const Users = ({ user, onClick, idUser }) => {
    const { surname, name, age, gender, checkboxElement } = user;

    return (
        <tr onClick={() => onClick(user)}>
            <td>{surname}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{checkboxElement ? 'yes' : 'no'}</td>
            <td>
                <ButtonDelete userToDeleted={idUser} />
            </td>
        </tr>
    )}

export default Users;