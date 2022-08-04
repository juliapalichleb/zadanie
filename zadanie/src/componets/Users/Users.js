const Users = ({user, onClick}) =>
        <tr onClick={() => onClick(user)}>
            <td>{user.surname}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.checkboxElement}</td>
        </tr>

export default Users;