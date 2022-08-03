import Table from "./componets/Table/Table";
import Form from "./componets/Form/Form";
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
          <Form takeForm={takeForm}/>
          <Table formRecived={formRecived}/>
      </header>
    </div>
  );
}

export default App;
