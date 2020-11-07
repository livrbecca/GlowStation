import React, { useState } from "react";
import Forms from "./components/Forms";
//import Home from './components/Home';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
          
      <Forms name={name} setName={setName} />
          
    </div>
  );
}

export default App;
