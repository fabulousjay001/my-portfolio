import { useSkillStyles } from "./styles";
import { header, text } from "./Data";


const Skill = () => {
  const classes = useSkillStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.header}>{header}</h1>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export default Skill;
