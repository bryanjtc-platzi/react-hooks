import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";
import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  const mode = darkMode ? "dark" : "light";
  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App App-${mode}`}>
        <Header darkMode={darkMode} onClick={handleClick} />
        <Characters />
        <h1>Hola Mundo</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
