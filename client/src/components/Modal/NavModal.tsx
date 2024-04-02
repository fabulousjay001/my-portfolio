import { ArrowDownward } from "@mui/icons-material";
import { useNavModalStyles } from "./styles";


const NavModal= ({}) => {
    const classes = useNavModalStyles();
  const scrollText = "Scroll down - Scroll down -";
return(

    <div className={classes.circle}>
    <div className={classes.circularText}>
      {scrollText.split("").map((char, i) => (
        <span
          key={i}
          className={classes.ourSpan}
          style={{
            transform: `rotate(${i * 14}deg)`,
          }}>
          {char}
        </span>
      ))}
    </div>
    <div className={classes.arrow}>
      <ArrowDownward style={{ fontSize: "100px" }} />
    </div>
  </div>


  )
}

export default NavModal