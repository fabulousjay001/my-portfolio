import React from "react";
import { useTestimonialStyles } from "./styles";
import { reviews } from "./Data";
import Card from "./Card";

const Testimonial = (prop: any) => {
  const classes = useTestimonialStyles();

  return (
    <>
      <div className={classes.testimonial}>
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
