/** @format */

import { useNavStyles } from "./styles";
import { link } from "./NavData";
import { FC, useContext, useState } from "react";
import { ThemeContext } from "../../App";
import Img from "../../../src/images/LOGO.png";
import { Close, DarkMode, DragHandle, LightMode } from "@mui/icons-material";
import { NavTypes } from "./types";

const NavBar: FC<NavTypes> = ({}) => {
  const classes = useNavStyles();
  const theme = useContext(ThemeContext);

  const [showLinks, setShowLinks] = useState(false);
  const [brightness, setBrightness] = useState(false);

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
              style={{ fontSize: "60px", }}
              className={classes.menuIcon}
              onClick={() => setShowLinks(!showLinks)}
            />
          )}

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
                </ul>{" "}
              </div>
            </>
          )}
        </div>
        <div className={classes.left}>
          <p className={classes.time}>10:28PM WAT</p>

          {brightness ? (
            <LightMode onClick={() => setBrightness(!brightness)} />
          ) : (
            <DarkMode onClick={() => setBrightness(!brightness)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
