/** @format */

import { Translate } from "@mui/icons-material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNavModalStyles = makeStyles((theme: Theme) => ({
  "@keyframes rotateText": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
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
