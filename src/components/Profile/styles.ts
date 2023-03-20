/** @format */

import { Translate } from "@mui/icons-material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useProfileStyles = makeStyles((theme: Theme) => ({
  root: {
    // background: theme.design.ayo.waz_black,
    height: "100vh",
    fontFamily: "Clash Display",
  },
  // lightmode: {
  //   background: theme.design.ayo.waz_white,
  //   color: theme.design.ayo.waz_black,
  //   height: "100vh",

  //   "& a": {
  //     color: theme.design.ayo.waz_black,
  //   },
  // },

  // lightmodetext: {
  //   color: theme.design.ayo.waz_black,
  //   fontSize: theme.spacing(3),
  // },

  profileContainer: {},
  Container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    width: "1440px",
    fontFamily: "Clash Display",
  },
  textContainer: {
    flexDirection: "column",
  },
  header: {
    marginTop: "100px",
    fontSize: "96px",
    fontWeight: 600,
    width: "100%",
  },
  description: {
    fontSize: "24px",
  },
  buttonGroup: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "space-between",
    width: "180px",
  },
  imgContainer: {
    // display: "flex",
    // flex: "1",
  },
  img: {
    height: "477px",
    marginTop: "238px",
  },
  leftBtn: {
    background: "black",
    color: "white",
    padding: "8px",
    fontSize: "14px",
  },
  rightBtn: {
    color: "black",
    background: "white",
    padding: "8px",
    fontSize: "14px",
  },
  circularText: {
    marginTop: "40px",
    position: "fixed",
    transform: "translate(0%, 50%)",
    fontSize: theme.typography.fontSize + 8,
    transition: "0.5s ease-out",
  },
  arrow: {
    // position: "fixed",
    top: "50%",
    left: "50%",
    transform: "Translate(0%, 20%)",
    cursor: "pointer",
  },
  rotated: {
    radius: "80",
  },
  info: {
    width: "230px",
  },
  test: {},
  social: {},
}));
