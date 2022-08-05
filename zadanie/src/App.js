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

    const takeForm = (formData) => {
        setUpdatedData(isEmpty(formData) ?  [...updatedData] : [...updatedData, formData]);
    }

    // const handleSubmit = (formData) => {
    //     setUpdatedData(isEmpty(formData) ?  [...updatedData] : [...updatedData, formData]);
    // }

  return (
          <div className="App">
              <FormUser takeForm={takeForm}/>
              <userContext.Provider value={{updatedData, setUpdatedData}}>
                  <TableUser updatedData={updatedData}/>
              </userContext.Provider>
              <PopUpDelete></PopUpDelete>
          </div>
  );
}

export default App;
