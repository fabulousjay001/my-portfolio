/** @format */

import * as React from "react";
import { useAppStyles } from "./styles";
import { theme } from "./theme";
import { createContext, useState } from "react";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import "./app.css";
import { useThemeContext } from "./context/theme";


type ThemeContextProps = {
  theme: string;
  setTheme: any;
};
export const ThemeContext = createContext({} as ThemeContextProps);

export default function App() {
  const classes = useAppStyles();
  const [theme, setTheme] = useState("");


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme='dark'>
        <NavBar url={""} title={""} id={0} />
        <Profile />
        <About />
      </div>
    </ThemeContext.Provider>
  );
}
