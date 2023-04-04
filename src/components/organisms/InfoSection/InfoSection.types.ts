import { ButtonProps } from "@components/atoms/Button";

export interface InfoSectionProps {
  title: string;
  description: string;
  button: ButtonProps;
  className?: string;
  pdf?: string;
}
