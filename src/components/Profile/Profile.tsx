import { useProfileStyles } from "./styles";
import Typical from "react-typical";
import { Data } from "./Data";
import Images from "../../../src/images/prof-pic.jpg";
import Button from "../Button/Button";

const Profile = () => {
  const classes = useProfileStyles();
  return (
    <div className={classes.root}>
      <div className={classes.profileDetails}>
        <div className={classes.profileDetailsRole}>
          <span className={classes.text}>
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
        </div>
        <div className={classes.headerImage}>
          <img src={Images} className={classes.headerImage} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
