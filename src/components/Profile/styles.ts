/** @format */

import { Translate } from "@mui/icons-material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useProfileStyles = makeStyles((theme: Theme) => ({
  "@keyframes rotateText": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  root: {
    height: "100vh",
    fontFamily: "Clash Display",
  },

  profileContainer: {},
  Container: {
    display: "flex",
    margin: "auto",
    width: "1440px",
    justifyContent: "space-between",
    fontFamily: "Clash Display",
  },
  textContainer: {
    flexDirection: "column",
    width: "80%",
  },
  header: {
    fontSize: "96px",
    fontWeight: 600,
    width: "100%",
  },
  description: {
    fontSize: "24px",
    width: "80%",
  },
  buttonGroup: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "space-between",
    width: "190px",
  },
  imageContainer: {},
  imgContainer: {
    // display: "flex",
  },
  img: {
    height: "500px",
    marginTop: "260px",
    borderRadius: "50%",
  },
  leftBtn: {
    background: "black",
    color: "white",
    padding: "8px",
    fontSize: "14px",
    border: "none",
    fontWeight: " bold",
  },
  rightBtn: {
    color: "black",
    background: "white",
    padding: "8px",
    fontSize: "14px",
    border: "none",
    fontWeight: " bold",
  },
  circle: {
    position: "relative",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginTop: "160px",
  },
  circularText: {
    position: "absolute",
    width: "100%",
    height: "100%",
    animation: "8s linear infinite",
    animationName: "$rotateText",
  },
  ourSpan: {
    position: "absolute",
    left: "50%",
    transformOrigin: "0 100px",
    fontSize: "24px",
  },
  arrow: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "Translate(0%, 20%)",
    cursor: "pointer",
  },
  rotated: {
    position: "absolute",
  },
  info: {
    width: "230px",
  },
  test: {},
  social: {},
}));
