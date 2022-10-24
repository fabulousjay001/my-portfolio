import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAppStyles = makeStyles((theme: Theme) => ({
  App: {},
  light: {
    background: theme.design.ayo.waz_white,
    color: theme.design.ayo.waz_black,
  },
  dark: {
    background: theme.design.ayo.waz_black,
    color: theme.design.ayo.waz_white,
  },
  
}));
