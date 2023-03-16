/** @format */

import { useProfileStyles } from "./styles";
import Typical from "react-typical";
import { Data } from "./Data";
import Images from "../../images/prof-pic.jpg";
import Button from "../Button/Button";
import { social } from "./Data";
import { ThemeContext } from "../../App";
import theme from "../../theme";
import { useContext } from "react";

const Profile = () => {
  const classes = useProfileStyles();
  const theme = useContext(ThemeContext);
  return (
    <div className={classes.root}>
      <div className={classes.Container}>
        <div className={classes.textContainer}>
          <div className={classes.header}>
            <p>Creative Front - End Developer.</p>
          </div>
          <div className={classes.description}>
            Hello, I’m Ayo, a creative problem solver that help brands create
            intuitive and accessible interfaces that meet user needs.
          </div>
          <div className={classes.buttonGroup}>
            <button className={classes.leftBtn}>Let's talk</button>
            <button className={classes.rightBtn}>view resume</button>
          </div>
        </div>

        <div className={classes.imgContainer}>
          <img src={Images} className={classes.img} />
          <div className={classes.info}>
            <div className={classes.test}>
              I support designers and agencies with creative development
            </div>
            <div className={classes.social}></div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
