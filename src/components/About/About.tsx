import { useAboutStyles } from "./Styles";
import img from "../../images/corpershun.jpg";
import { Data } from "./Data";

const About = () => {
  const classes = useAboutStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.image} src={img} />
      </div>
      <div className={classes.info}>
        <h1 className={classes.header}>About Me</h1>
        <h1 className={classes.header}>Web Developer</h1>
        <p className={classes.text}>{Data}</p>
      </div>
    </div>
  );
};

export default About;