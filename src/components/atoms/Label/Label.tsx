import React from "react";
import classnames from "classnames";

import { LabelProps } from "./Label.types";

const Label: React.FC<LabelProps> = (props) => {
  const { children, className, htmlFor } = props;

  const tailwind = `text-sm md:text-base text-black dark:text-white`;
  const classNames = classnames("ws-label", className, tailwind);

  return (
    <label className={classNames} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.defaultProps = {
  className: "",
  htmlFor: "",
};

export { Label };
