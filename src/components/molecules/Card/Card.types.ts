import { ImageProps } from "next/image";
import { ButtonProps } from "@components/atoms/Button";
import { LinkProps } from "@components/atoms/Link";

export interface CardProps {
  title: string;
  description: string;
  image: ImageProps;
  className?: string;
  position?: "left" | "right" | string;
  technologies?: string[];
  button?: ButtonProps;
  link?: LinkProps;
}
