/** @format */

import { ThemeContext } from "@emotion/react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNavStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    margin: "auto",
    alignItems: "center",
    background: theme.design.ayo.waz_black,
    color: theme.design.ayo.waz_white,
    height: theme.spacing(10),
    fontFamily: "Clash Display",
  },
  lightmode: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    margin: 0,
    padding: 0,
    background: theme.design.ayo.waz_white,
    color: theme.design.ayo.waz_black,
    height: theme.spacing(10),
    fontFamily: theme.design.font.openSans,
    "& a": {
      color: theme.design.ayo.waz_black,
    },
    "& div": {
      color: theme.design.ayo.waz_black,
    },
  },
  navContainer: {
    width: "1440px",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    alignItems: "center",
  },
  navItem: {},
  menu: {
    display: "flex",
    justifyContent: "center",
  },
  menuIcon: {},
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "120px",
  },
  time: {},
  menuContainer: {
    position: "absolute",
    top: "80px",
    width: "100%",
  },
  unorderedList: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    listStyle: "none",
    background: theme.design.ayo.waz_black,
  },
  listItem: {
    listStyle: "none",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "64px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding:0
  },
  logo: {
    background: theme.design.ayo.waz_black,
    color: theme.design.ayo.waz_white,
    height: "50px",
  },
  logoName: {
    width: theme.spacing(30),
    paddingLeft: theme.spacing(12),
  },
}));
