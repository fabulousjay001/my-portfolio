/** @format */

import { useNavStyles } from "./styles";
import { link } from "./NavData";
import { FC, useContext, useState } from "react";
import Img from "../../assets/images/LOGO.png";
import { Close, DragHandle } from "@mui/icons-material";
import { NavTypes } from "./types";
import { ThemeContext } from "../../App";
import Themetoggle from "../Themetoggle/Themetoggle";

const NavBar: FC<NavTypes> = ({}) => {
  const classes = useNavStyles();
const {theme}=useContext(ThemeContext)
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.navContainer}>
        <img src={Img} className={classes.logo} />

        <div className={classes.menu}>
          {showLinks ? (
            <Close
              style={{ fontSize: "60px" }}
              className={classes.menuIcon}
              onClick={() => setShowLinks(!showLinks)}
            />
          ) : (
            <DragHandle
              style={{ fontSize: "60px" }}
              className={classes.menuIcon}
              onClick={() => setShowLinks(!showLinks)}
            />
          )}
        </div>
        <div className={classes.left}>
          <p className={classes.time}>10:28PM WAT </p>
          <Themetoggle/>
        </div>
      </div>
      {showLinks && (
        <>
          {" "}
          <div className={classes.menuContainer}>
            <ul className={classes.unorderedList}>
              {link.map((link) => {
                return (
                  <li>
                    <a className={classes.listItem} href={link.url}>
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
