import "../styles/Header.css";

const Header = (props) => {
  const { darkMode, onClick, mode } = props;

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button
        className={`Header_button Header_button-${mode}`}
        type="button"
        onClick={onClick}
      >
        <h2>{darkMode ? "Light Mode" : "Dark Mode"}</h2>
      </button>
    </div>
  );
};

export default Header;
