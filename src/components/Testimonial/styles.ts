import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTestimonialStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.design.ayo.ayo_gray,
    width: "100%",
    color: theme.design.ayo.waz_white,
  },
 
  lightmode: {
    background: theme.design.ayo.dim_grey,
    color: theme.design.ayo.waz_black,
  },

  review: {
    width: "90%",
    marginLeft: theme.spacing(18),
    paddingTop: theme.spacing(3),
  },
  comments: {
    margin: 0,
  },
  Header: {
    display: "flex",
    juatifyContent: "center",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "90%",
    margin: "auto",
  },

  quoteIcon: {
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    margin: "auto",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    width: theme.spacing(45),
    background: theme.design.ayo.waz_black,
    borderRadius: theme.spacing(2),
    height: theme.spacing(45),
  },

  lightCard: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    width: theme.spacing(45),
    background: theme.design.ayo.waz_white,
    borderRadius: theme.spacing(2),
    height: theme.spacing(45),
  },
  content: { width: "90%" },
  header: {
    color: theme.design.ayo.waz_black,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    width: "90%",
  },
  headerText: {},
  img: {
    borderRadius: "50%",
    height: theme.spacing(10),
    width: theme.spacing(9),
  },
  name: {
    color: theme.design.ayo.waz_white,
  },
  nameLightMode: {
    color: theme.design.ayo.waz_black,
  },

  job: {
    color: theme.design.ayo.ayo_green,
  },
  description: {
    display: "flex",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeightLight,
    fontSize: theme.typography.fontSize * 1.5,
    width: "90%",
    margin: "auto",
  },

  text: {
    
  },
}));
