/** @format */

import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAboutStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    background: theme.design.ayo.ayo_gray,
    height: "700px",
    justifyContent: "space-evenly",
    color: theme.design.ayo.waz_white,
  },

  lightMode: {
    display: "flex",
    color: theme.design.ayo.waz_black,
    background: theme.design.ayo.dim_grey,
    height: "700px",
    justifyContent: "space-evenly",
  },
}));
