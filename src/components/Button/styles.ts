import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useButtonStyles = makeStyles((theme: Theme) => ({
  root: {},

  button: {
    background: theme.design.ayo.waz_black,
    color: theme.design.ayo.waz_white,
    border: "3px solid white",
    transition: "1s",
    borderRadius: theme.spacing(4),
    padding:theme.spacing(1.5,5),
    fontFamily: theme.design.font.openSans,
    fontSize: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,

    "&:hover": {
      color: "black",
      background: "white",
     
    },
  },

  contactUs: {
    
  }
}));
