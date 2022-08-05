import TableUser from "./componets/TableUser/TableUser";
import FormUser from "./componets/FormUser/FormUser";
import { useState } from "react";
import './App.css';
import { isEmpty } from "lodash";
import data from "./data/user-data.json";
import { userContext } from "./Contex/Contex";
import PopUpDelete from "./componets/PopUpDelete/PopUpDelete";

function App() {
    const [updatedData, setUpdatedData] = useState(data);
    const [deletedUser, setDeletedUser] = useState();
    const [popUpButton, setPopUpButton] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const takeForm = (formData) => {
        setUpdatedData(isEmpty(formData) ?  [...updatedData] : [...updatedData, formData]);
    }


    const handlePopUp = () => {
        const copy = [...updatedData]
        popUpButton && copy.splice(deletedUser,1)
        console.log(popUpButton)
        setUpdatedData(copy)
        setIsClicked(false)
    }

  return (
          <div className="App">
              <FormUser takeForm={takeForm}/>
              <userContext.Provider value={{ handlePopUp, setDeletedUser, setPopUpButton, setIsClicked, isClicked }}>
                  <TableUser updatedData={updatedData}/>
                  <PopUpDelete />
                  {/*  {isPopupOpen && <PopUpDelete />}    */}
              </userContext.Provider>
          </div>
  );
}

export default App;
