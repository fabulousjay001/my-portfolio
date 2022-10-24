import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useProfileStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.design.ayo.waz_black,
    height: "100vh",
  },
  lightmode: {
    background: theme.design.ayo.waz_white,
    color: theme.design.ayo.waz_black,
    height: "100vh",

    "& a": {
      color: theme.design.ayo.waz_black,
    },
  },

  lightmodetext: {
    color: theme.design.ayo.waz_black,
    fontSize: theme.spacing(3),
  },
  profilePage: {},
  header: {
    fontSize: theme.spacing(5),
  },
  profileDetails: {
    display: "flex",
    width: "100%",
    top: theme.spacing(20),
    justifyContent: "space-around",
    color: theme.design.ayo.white,
  },
  profileDetailsRole: {
    width: "80%",
  },

  headerImage: {
    position: "absolute",
    height: "60vh",
    borderRadius: "50%",
    margin: theme.spacing(5, 0, 0, 10),
  },
  image: {},
  text: {
    color: theme.design.ayo.waz_white,
    fontSize: theme.spacing(3),
  },

  wrapper: {
    marginTop: 0,
  },
  tagLine: { fontSize: theme.spacing(2.5) },
  option: {
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    width: theme.spacing(40),
  },
  container: {},
  listItem: {
    listStyle: "none",
    marginTop: theme.spacing(3),
    width: "8%",
  },
  social: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 0,
  },
  socialLightMode: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 0,
  },
  icon: {
    color: theme.design.ayo.waz_white,
    textDecoration: "none",

    // fontSize: theme.typography.fontSize,
    transition: "0.3s",
  },

  lightmodeicon: {
    color: theme.design.ayo.waz_black,
  },
  hire: {},
  // button: {
  //   background: theme.design.ayo.waz_black,
  //   color: theme.design.ayo.waz_white,
  //   border: "3px solid white",
  //   transition: "0.5s",
  //   borderRadius: theme.spacing(1),
  //   height: theme.spacing(5),

  //   "&:hover": {
  //     color: "black",
  //     background: "white",
  //   },
  // },
}));
