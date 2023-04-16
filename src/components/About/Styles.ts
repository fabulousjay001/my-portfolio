/** @format */

import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAboutStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    background: theme.design.ayo.waz_black,
    height: "700px",
    justifyContent: "space-evenly",
    color: theme.design.ayo.waz_white,
    fontFamily: "Clash display",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "1440px",
  },
  content: {
    width: "65%",
  },
  description: {
    margin: 0,
    fontSize: "40px",
  },
}));
