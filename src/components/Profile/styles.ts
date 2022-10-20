import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useProfileStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.design.ayo.waz_black,
    height: "100vh",
  },
  header: {
    fontSize: theme.spacing(5),
  },
  profileDetails: {
    position: "absolute",
    display: "flex",
    width: "100%",
    top: theme.spacing(20),
    justifyContent: "space-around",
    color: theme.design.ayo.white,
  },
  profileDetailsRole: {
    width: "90%",
  },

  headerImage: {
    position: "absolute",
    height: "60vh",
    borderRadius: "50%",
    margin: theme.spacing(5, 5, 0, 5),
  },
  image: {
  
  },
  text: {
    color: theme.design.ayo.waz_white,
    fontSize: theme.spacing(3),
  },
  wrapper: {
    marginTop: 0,
  },
  tagLine: { fontSize: theme.spacing(2.5) },
  option: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "space-between",
    width: theme.spacing(40),
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
