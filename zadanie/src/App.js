import Table from "./componets/Table/Table";
import FormUser from "./componets/FormUser/FormUser";
import { useState } from "react";
import './App.css';

function App() {
    const [formRecived, setFormRecived] = useState({});

    const takeForm = (formData) => {
    setFormRecived (formData);
    }

  return (
    <div className="App">
      <header className="App-header">
          <FormUser takeForm={takeForm}/>
          <Table formRecived={formRecived}/>
      </header>
    </div>
  );
}

export default App;
