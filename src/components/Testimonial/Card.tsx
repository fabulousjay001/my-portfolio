import { useTestimonialStyles } from "./styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

type review = {
  job: string;
  name: string;
  text: string;
  image: string;
};
const Card = (props: review) => {
  const classes = useTestimonialStyles();

  return (
    <article className={classes.card}>
      <div className={classes.content}>
        <div className={classes.header}>
          <img src={props.image} className={classes.img} alt="img" />

          <div className={classes.headerText}>
            <h1 className={classes.job}>{props.job}</h1>
            <h2 className={classes.name}>{props.name}</h2>{" "}
          </div>
        </div>

        <h2 className={classes.description}>
          {props.text}{" "}
          <span className={classes.quoteIcon}>
            <FormatQuoteIcon />
          </span>
        </h2>
      </div>
    </article>
  );
};

export default Card;
