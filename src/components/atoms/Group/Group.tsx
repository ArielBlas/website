import React from "react";
import classnames from "classnames";
import { GroupProps } from "./Group.types";

const Group: React.FC<GroupProps> = (props) => {
  const { children, className } = props;

  const tailwind = `flex flex-col my-2`;
  const classNames = classnames(className, tailwind);

  return <div className={classNames}>{children}</div>;
};

export { Group };
