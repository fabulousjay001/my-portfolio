/** @format */

import * as React from "react";
import { useAppStyles } from "./styles";
import { theme } from "./theme";
import { createContext, useState } from "react";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Skill from "./components/Skill/Skill";
import Testimonial from "./components/Testimonial/Testimonial";

// import clx from "classnames";

type ThemeContextProps = {
  theme: boolean;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function App() {
  const classes = useAppStyles();
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    return;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <NavBar url={""} title={""} id={0} />
        <Profile />
        <About />
        <Skill />
        <Testimonial />
      </div>
    </ThemeContext.Provider>
  );
}
