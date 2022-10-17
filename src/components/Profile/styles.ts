import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useProfileStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.design.ayo.waz_black,
    height: "100vh",
    top: theme.spacing(0),
  },
  header: {
    // color: theme.design.ayo.waz_gold,
  },
  profileDetails: {
    position: "absolute",
    display: "flex",
    width: "100%",
    top: theme.spacing(20),
    justifyContent: "space-around",
    color: theme.design.ayo.white,
  },
  profileDetailsRole: {},

  headerImage: {
    height: "60vh",
    borderRadius: "50%",
  },
  image: {},
  text: {
    color: theme.design.ayo.waz_white,
  },
  wrapper: {
    marginTop: 0,
  },
  tagLine: {},
  option: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "space-between",
    width: theme.spacing(30),
  },
  hire: {},
  button: {
    background: theme.design.ayo.waz_black,
    color: theme.design.ayo.waz_white,
    border: "2px solid white",
    transition: "0.5s",
    borderRadius: "25px",

    "&:hover": {
      color: "black",
      background: "white",
    },
  },
}));
