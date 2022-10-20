import { useButtonStyles } from "./styles";

const Button = (props:any) => {
  const classes = useButtonStyles();
  return (
    <div className={classes.root}>
      <button className={classes.button}>{props.text} </button>
    </div>
  );
};

export default Button;
