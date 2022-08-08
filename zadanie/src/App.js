import TableUser from "./componets/TableUser/TableUser";
import FormUser from "./componets/FormUser/FormUser";
import { useEffect, useState } from "react";
import './App.css';
import { isEmpty } from "lodash";
import data from "./data/user-data.json";
import { userContext } from "./Contex/Contex";
import PopUpDelete from "./componets/PopUpDelete/PopUpDelete";

function App() {
    const [updatedData, setUpdatedData] = useState(data);
    const [deletedUser, setDeletedUser] = useState();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupButton, isPopupButton] = useState(false);

    const takeForm = (formData) => {
        setUpdatedData(isEmpty(formData) ?  [...updatedData] : [...updatedData, formData]);
    }

    useEffect(() => {
        const dataFilter = popupButton ? updatedData.filter((user, index) => index !== deletedUser) : updatedData;
        setUpdatedData(dataFilter);
        setIsPopupOpen(false);
        isPopupButton(null);
    }, [popupButton])

  return (
          <div className="App">
              <FormUser takeForm={takeForm}/>
              <userContext.Provider value={{ setDeletedUser, setIsPopupOpen, isPopupButton, popupButton }}>
              <TableUser updatedData={ updatedData }/>
                { isPopupOpen && <PopUpDelete /> }
              </userContext.Provider>
          </div>
  );
}

export default App;
