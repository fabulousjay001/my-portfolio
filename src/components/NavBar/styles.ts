import { ThemeContext } from "@emotion/react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNavStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    margin: 0,
    padding: 0,
    background: theme.design.ayo.waz_black,
    color: theme.design.ayo.waz_white,
    height: theme.spacing(10),
    fontFamily: theme.design.font.openSans,
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

  nav: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    alignItems: "center",
  },
  logo: {
    color: theme.design.ayo.waz_white,
    fontWeight: theme.typography.fontWeightBold,
  },
  logoName: {
    width: theme.spacing(30),
    paddingLeft: theme.spacing(12),
  },

  container: {
    color: theme.design.ayo.waz_white,
    display: "flex",
    width: "50%",
  },
  navItems: {
    display: "flex",
    margin: "auto",
  },

  listContainer: {
    display: "flex",
    // justifyContent: "Center",
    // width: "60%",
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    color: theme.design.ayo.waz_white,
    textDecoration: "none",
    margin: theme.spacing(3),
    fontSize: theme.spacing(3),

  },

  heading: {},
  content: {},
  btn: {},
  img: {},
}));
