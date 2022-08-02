import './Table.css';
import Users from "../Users/Users";
import RowData from "../RowData/RowData";
import {useState} from "react";


const Table = () => {
    const users = [
        { "surname":"Adrian", "name":"b", "age":"2" },
        {"surname":"Julia", "name":"c", "age":"3"},
        {"surname":"Basia", "name":"a", "age":"1"}
    ]

    const [selectedUser,setSelectedUser] = useState();

    return (
        <>
        <table>
            <thead>
            <tr>
                <th>Imie</th>
                <th>nazwisko</th>
                <th>wiek</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user,i) => (
                <Users onClick={(u)=>setSelectedUser(u)} user={user} key={`users ${i}`}/>

            ))}
            </tbody>
        </table>
            {
                selectedUser &&
                <RowData selectedUser={selectedUser}/>
            }

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
export default Table;