import React from "react";
import classnames from "classnames";
import { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = (props) => {
  const { children, className, style } = props;

  const tailwind = `text-black dark:text-white`;
  const classNames = classnames("ws-text", className, tailwind);

  return (
    <p className={classNames} style={style}>
      {children}
    </p>
  );
};

Text.defaultProps = {
  className: "",
};

export { Text };
