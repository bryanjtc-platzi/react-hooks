import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  let mode = darkMode ? "dark" : "light";
  return (
    <div className={`App App-${mode}`}>
      <Header darkMode={darkMode} onClick={handleClick} mode={mode} />
      <Characters mode={mode} />
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
