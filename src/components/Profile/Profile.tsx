/** @format */

import { useProfileStyles } from "./styles";
import Typical from "react-typical";
import { Data } from "./Data";
import Images from "../../assets/images/prof-pic.jpg";
import Button from "../Button/Button";
import { social } from "./Data";
import theme from "../../theme";
import { useContext } from "react";
import { ArrowDownward } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const Profile = () => {
  const classes = useProfileStyles();
  const scrollText = "Scroll down - Scroll down -";
  return (
    <div className={classes.root}>
      <div className={classes.Container}>
        <div className={classes.textContainer}>
          <div className={classes.header}>
            {/* <Typical
              loop={Infinity}
              steps={[
                "Hello guys,",
                1000,
                "I'm Ayo, a creative frontend developer.",
                1000,
                "I build software applications",
                1000,
                "For organisations of various sizes.",
                3000,
              ]}
            /> */}
            {/* <p> </p> */}
          </div>
          <div className={classes.description}>
            Hello, I’m Ayo, a creative problem solver that help brands create
            intuitive and accessible interfaces that meet user needs.
          </div>
          <div className={classes.buttonGroup}>
            <button className={classes.leftBtn}>Let's talk</button>
            <button className={classes.rightBtn}>view resume</button>
          </div>

          <div className={classes.circle}>
            <div className={classes.circularText}>
              {scrollText.split("").map((char, i) => (
                <span
                  key={i}
                  className={classes.ourSpan}
                  style={{
                    transform: `rotate(${i * 14}deg)`,
                  }}>
                  {char}
                </span>
              ))}
            </div>
            {/* <div className={classes.arrow}>
              <ArrowDownward style={{ fontSize: "100px" }} />
            </div> */}
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
