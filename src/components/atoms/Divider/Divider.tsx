import React from "react";
import classnames from "classnames";

import { DividerProps } from "./Divider.types";

const Divider: React.FC<DividerProps> = (props) => {
  const { className } = props;

  const tailwind = `py-4 md:py-6`;
  const classNames = classnames("ws-divider", className, tailwind);

  return <div className={classNames}></div>;
};

Divider.defaultProps = {
  className: "",
};

export { Divider };
