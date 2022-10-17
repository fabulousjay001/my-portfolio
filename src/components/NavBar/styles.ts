import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNavStyles = makeStyles((theme: Theme) => ({
  root: {
    // display: "flex",
    display: "flex",
    // justifyContent: "flex-start",
    width: "100%",
    margin: 0,
    padding: 0,
    background: theme.design.ayo.waz_black,
    height: "90px",
  },
  nav: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
  },
  logo: {
    color: theme.design.ayo.waz_white,
  },
  icon:{},
  navItems: {
    display: "flex",
    justifyContent: "flex-end",
    width: "70%",
  },

  listContainer: {
    display: "flex",
    justifyContent: "Center",
    width: "50%",
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    color: theme.design.ayo.waz_white,
    textDecoration: "none",
    margin: theme.spacing(3),
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
