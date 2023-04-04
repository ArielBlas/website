import React from "react";
import classnames from "classnames";

import { FormProps } from "./Form.types";

const Form: React.FC<FormProps> = (props) => {
  const { children, className, onSubmit } = props;

  const tailwind = `w-full`;
  const classNames = classnames("ws-form", className, tailwind);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (onSubmit) return onSubmit(event);
  };

  return (
    <form className={classNames} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.defaultProps = {
  className: "",
  onSubmit: undefined,
};

export { Form };
