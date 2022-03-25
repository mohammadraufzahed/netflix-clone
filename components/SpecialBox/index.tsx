import { ReactChild, ReactChildren } from "react";
import classes from "styles/components/SpecialBox/index.module.scss";

type CustomPropsType = {
  children: ReactChild | ReactChildren;
  className?: string;
  position?: "left" | "right";
};

const SpecialBox = ({
  children,
  className,
  position = "left",
}: CustomPropsType) => {
  return (
    <section
      className={`${classes.container} ${
        position == "left" ? classes.left : classes.right
      } ${className}`}
    >
      {children}
    </section>
  );
};
export default SpecialBox;
