import { useNavStyles } from "./styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavBar = () => {
  const classes = useNavStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <h1>Fab JAY</h1>
        </div>
        <div className={classes.icon}>
          {/* <a href='instagram.com'>{InstagramIcon}</a> */}
        </div>
        <div className={classes.navItems}>
          <ul className={classes.listContainer}>
            <a href="#" className={classes.listItem}>
              <li>Home</li>
            </a>
            <a href="#" className={classes.listItem}>
              <li>About</li>
            </a>
            <a href="#" className={classes.listItem}>
              <li>Testimonials</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
