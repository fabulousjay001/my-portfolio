import { useButtonStyles } from "./styles";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const Button = (props:any) => {
  const classes = useButtonStyles();
  const theme = useContext(ThemeContext);
    return (
    <div className={classes.root}>
      <button className={theme?. theme?  classes.button : classes.buttonLight}>{props.text} </button>
    </div>
  );
};

export default Button;
