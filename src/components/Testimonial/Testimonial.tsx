import React, { useContext } from "react";
import { useTestimonialStyles } from "./styles";
import { reviews } from "./Data";
import Card from "./Card";
import { ThemeContext } from "../../App";

const Testimonial = (prop: any) => {
  const classes = useTestimonialStyles();
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className={theme?.theme ? classes.root : classes.lightmode}>
        <div className={classes.review}>
          <h1 className={classes.comments}>What people are saying</h1>
          <h1 className={classes.Header}>Client</h1>
        </div>
        <div className={classes.cardContainer}>
          <>
            {" "}
            {reviews.map((reviews) => {
              return (
                <Card
                  key={reviews.id}
                  image={reviews.image}
                  name={reviews.name}
                  job={reviews.job}
                  text={reviews.text}
                />
              );
            })}
          </>
        </div>{" "}
      </div>
    </>
  );
};

export default Testimonial;
