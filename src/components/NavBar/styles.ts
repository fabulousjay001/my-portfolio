import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNavStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "100%",
    margin: 0,
    padding: 0,
    background: theme.design.ayo.waz_black,
    height: theme.spacing(10),
    fontFamily: theme.design.font.openSans,
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
    // margin:'auto'
  },

  container: {
    color: theme.design.ayo.waz_white,
    display: "flex",
    width: "50%",
  },
  icon: {},
  navItems: {
    display: "flex",
    margin: "auto",
  },

  listContainer: {
    display: "flex",
    justifyContent: "Center",
    width: "60%",
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    color: theme.design.ayo.waz_white,
    textDecoration: "none",
    margin: theme.spacing(3),
    fontSize: theme.spacing(3),
    transition: "0.3s",
  
    "&:hover": {
      width:'100%',
      borderBottom: "solid 3px white",
    },
  },
  heading: {},
  content: {},
  btn: {},
  img: {},
}));
