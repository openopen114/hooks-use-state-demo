import React, { useState, useEffect } from "react";
import NameInput from "./components/NameInput";
import "./App.css";

function App() {
  // name state
  const [name, setName] = useState("");

  //組件掛載事件
  useEffect(() => {
    // componentDidMount
    setName("Moto");
    return () => {
      // componentWillUnmount
    };
  }, []);

  //接收子組件的name, 並更新
  const updateName = _name => {
    setName(_name);
  };

  return (
    <div className="App-header">
      {/* show name */}
      <h1>Hello {name}</h1>

      {/* Name Input */}
      <NameInput name={name} updateName={updateName}></NameInput>
    </div>
  );
}

export default App;
