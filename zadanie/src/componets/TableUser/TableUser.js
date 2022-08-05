import Users from "../Users/Users";
import RowData from "../RowData/RowData";
import { useState } from "react";
import './TableUser.css';

const TableUser = ({ updatedData }) => {
    const [selectedUser, setSelectedUser] = useState();

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Polish</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {updatedData.map((user, i) => (
                    <Users onClick={(u)=>setSelectedUser(u)} user={user} key={`users ${i}` } idUser={i}/>
                ))}

                </tbody>
            </table>
            { selectedUser && <RowData selectedUser={selectedUser}/>}
        </>
    )
}

//     const Table2 = (props) => {
//         const isGirl = props.name === "Julia";
//
//         return (
//             <>
//                 <p> {isGirl ? "yes" : "no"}</p>
//                 <div> jksjd </div>
//             </>
//
//         )
//     }
export default TableUser;