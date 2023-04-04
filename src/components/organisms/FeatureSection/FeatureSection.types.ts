import { CardProps } from "@components/molecules/Card";
import { ButtonProps } from "@components/atoms/Button";

export interface FeatureSectionProps {
  title: string;
  items: CardProps[];
  button?: ButtonProps;
  className?: string;
}
