const Users = ({user, onClick}) =>
        <tr onClick={() => onClick(user)}>
            <td>{user.surname}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
        </tr>

export default Users;