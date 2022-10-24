import { useSkillStyles } from "./styles";
import { header, text } from "./Data";
import { ThemeContext } from "../../App";
import { useContext } from "react";


const Skill = () => {
  const classes = useSkillStyles();
  const theme =useContext(ThemeContext)
  return (
    <div className={theme?.theme?classes.root:classes.lightMode}>
      <div className={classes.container}>
        <h1 className={theme?.theme?classes.header: classes.lightModeHeader}>{header}</h1>
        <p className={theme?.theme?classes.text: classes.lightModeText}>{text}</p>
      </div>
    </div>
  );
};

export default Skill;
