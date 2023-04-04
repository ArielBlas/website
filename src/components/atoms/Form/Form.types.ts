import React from "react";

export interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}
