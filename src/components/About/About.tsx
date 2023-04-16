/** @format */

import { useAboutStyles } from "./Styles";
import { Data } from "./Data";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const About = () => {
  const classes = useAboutStyles();
  const theme = useContext(ThemeContext);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p>About</p>{" "}
        <div className={classes.content}>
          <p className={classes.description}>
            As a developer, I strive to deliver to create beautiful, performant
            websites from stunning designs. I enjoy creating extremely visual
            and interactive experiences using any technology that will deliver
            the best results.
          </p>

          <p className={classes.description}>
            With a background in project management and code testing, I work
            closely with design focused teams to build websites and microsites
            for companies and individuals. I have years of experience working
            and collaborating on product teams and leading engineering efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
