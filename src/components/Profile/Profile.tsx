import { useProfileStyles } from "./styles";
import Typical from "react-typical";
import { Data } from "./Data";
import Images from "../../../src/images/prof-pic.jpg";
import Button from "../Button/Button";
import { social } from "./Data";
import { ThemeContext } from "../../App";
import theme from "../../theme";
import { useContext } from "react";

const Profile = () => {
  const classes = useProfileStyles();
  const theme = useContext(ThemeContext);
  return (
    <div className={theme?.theme ? classes.root : classes.lightmode}>
      {/* <div className={classes.profilePage}></div> */}
      <div className={classes.profileDetails}>
        <div className={classes.profileDetailsRole}>
          <span className={theme?.theme ? classes.text : classes.lightmodetext}>
            <h1 className={classes.header}>
              <Typical
                loop={Infinity}
                steps={[
                  "I am Adegbulu Ayomiposi",
                  1000,
                  "A Frontend Dev",
                  1000,
                  "Enthuasiastic Dev",
                  1000,
                  "Goal oriented",
                  1000,
                  "React/React Js Dev",
                  1000,
                ]}
              />
            </h1>
            <span className={classes.tagLine}>{Data}</span>
          </span>
          <div className={classes.option}>
            <Button text="Hire Me" />
            <a href="" download="Ay.pdf">
              <Button text="Download" />
            </a>
          </div>

          <ul className={theme?.theme ? classes.social : classes.socialLightMode}>
            {social.map((social) => {
              return (
                <li className={classes.listItem}>
                  {" "}
                  <a
                    className={
                      theme?.theme ? classes.icon : classes.lightmodeicon
                    }
                    href={social.url}>
                    {social.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.headerImage}>
          <img src={Images} className={classes.headerImage} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
