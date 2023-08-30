import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function Context({ children }) {
  const [theme, setTheme] = useState("Light");

  const togleTheme = () => {
    setTheme(theme === "Light" ? "dark" : "Light");
  };
  return (
    <ThemeContext.Provider value={{ theme, togleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { Context, ThemeContext };
