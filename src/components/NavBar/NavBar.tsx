import { useNavStyles } from "./styles";
import { link } from "./NavData";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import ReactSwitch from "react-switch";

type link = {
  url: string;
  title: string;
};

const NavBar = () => {
  const classes = useNavStyles();
  const theme = useContext(ThemeContext);

  return (
    <div className={theme?.theme ? classes.root : classes.lightmode}>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <h1 className={classes.logoName}> Fab jAY</h1>
        </div>
      </div>

      <ul className={classes.listContainer}>
        {link.map((link) => {
          return (
            <li>
              <a className={classes.listItem} href={link.url}>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
