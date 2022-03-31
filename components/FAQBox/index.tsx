import { FAQ } from "types/FAQ";
import classes from "styles/components/FAQBox/index.module.scss";

const FAQBox = ({ title, description }: FAQ & {}) => {
  return (
    <details className={classes.container}>
      <summary>
        {title} <span>+</span>
      </summary>

      <p>{description}</p>
    </details>
  );
};

export default FAQBox;
