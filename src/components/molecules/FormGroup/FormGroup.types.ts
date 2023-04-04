import React from "react";
import { InputProps } from "@components/atoms/Input";
import { ButtonProps } from "@components/atoms/Button";

export interface FormGroupProps {
  items: ({
    label: string;
  } & InputProps)[];
  buttons: ButtonProps[];
  className?: string;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}
