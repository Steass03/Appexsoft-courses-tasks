import React, { useContext } from "react";
import { ThemeContext } from "./Context";

function ThemeToggle() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme : {theme}</p>
      <button onClick={toggleTheme}>Change Theme </button>
    </div>
  );
}

export default ThemeToggle;
