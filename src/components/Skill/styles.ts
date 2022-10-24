import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSkillStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    background: theme.design.ayo.waz_black,
    height: "600px",
    justifyContent: "space-evenly",
  },
  container: { width: "48%" },
  header: {
    color: theme.design.ayo.waz_white,

    //   height:theme.spacing(30)
  },
  image: {
    height: "576px",
    margin: theme.spacing(8.5),
  },

  text: {
    color: theme.design.ayo.waz_white,
  },
}));
