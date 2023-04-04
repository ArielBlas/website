import React from "react";
import classnames from "classnames";

import { Form, Input, Label, Group, Button } from "@components/atoms";
import { FormGroupProps } from "./FormGroup.types";

const FormGroup: React.FC<FormGroupProps> = (props) => {
  const { className, onSubmit, items, buttons } = props;

  const tailwind = `flex flex-col items-center`;
  const classNames = classnames("ws-formGroup", className, tailwind);

  return (
    <Form className={classNames} onSubmit={onSubmit}>
      <div className="w-full">
        {items.map((item, index) => (
          <Group key={index}>
            <Label>{item.label}</Label>
            <Input {...item} />
          </Group>
        ))}
      </div>
      <div className="my-3"></div>
      <div>
        {buttons.map((item, index) => (
          <Button {...item} key={index}>
            {item.children}
          </Button>
        ))}
      </div>
    </Form>
  );
};

FormGroup.defaultProps = {
  className: "",
  onSubmit: undefined,
};

export { FormGroup };
