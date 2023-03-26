/** @format */

import { useAboutStyles } from "./Styles";
import img from "../../images/corpershun.jpg";
import { Data } from "./Data";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const About = () => {
  const classes = useAboutStyles();
  const theme = useContext(ThemeContext);
  return (
    <div className={theme?.theme ? classes.root : classes.lightMode}>
      
    </div>
  );
};

export default About;
