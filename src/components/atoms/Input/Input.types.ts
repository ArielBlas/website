import React from "react";

export interface InputProps {
  className?: string;
  onChange?(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void;
  type?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}
