import Users from "../Users/Users";
import RowData from "../RowData/RowData";
import { useState } from "react";
import data from "../../data/user-data.json";
import { isEmpty } from "lodash";
import './Table.css';

const Table = ({ formRecived }) => {

    const [selectedUser,setSelectedUser] = useState();
    // const [updateData,setUpdateData] = useState();

    const updateData = isEmpty(formRecived) ?  [...data] : [...data,formRecived];
    // console.log(formRecived);
    // console.log(updateData);
    // console.log(isEmpty(formRecived));

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
                {updateData.map((user,i) => (
                    <Users onClick={(u)=>setSelectedUser(u)} user={user} key={`users ${i}`}/>
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
export default Table;