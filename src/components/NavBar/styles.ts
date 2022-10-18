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
    height: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    // margin:'auto'
  },
 
  icon: {
    color: theme.design.ayo.waz_white,
    display: "flex",
    width: "40%",
    height: theme.spacing(15),
  },
  navItems: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    margin: "auto",
    height: theme.spacing(5),
  },

  listContainer: {
    display: "flex",
    justifyContent: "Center",
    width: "100%",
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    color: theme.design.ayo.waz_white,
    textDecoration: "none",
    margin: theme.spacing(3),
    fontSize: theme.spacing(3),
  },
  heading: {
    // fontSize: theme.typography.fontSize + 28,
    // color: theme.design.colors.white,
    // marginBottom: theme.spacing(3),
    // fontFamily: theme.design.font.dmSans,
    // textAlign: "center",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: theme.typography.fontSize + 16,
    // },
  },
  content: {},
  btn: {
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: theme.typography.fontSize + 2,
    //   padding: theme.spacing(0.5, 4),
    // },
  },
  img: {
    // height: "232px",
    // width: "100%",
  },
}));
