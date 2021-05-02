import "../styles/Header.css";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = (props) => {
  const { darkMode, onClick } = props;
  const color = useContext(ThemeContext);

  return (
    <div className={`Header Header-${color}`}>
      <h1>ReactHooks</h1>
      <button
        className={`App_button App_button-${color}`}
        type="button"
        onClick={onClick}
      >
        <h2>{darkMode ? "Light Mode" : "Dark Mode"}</h2>
      </button>
    </div>
  );
};

export default Header;
