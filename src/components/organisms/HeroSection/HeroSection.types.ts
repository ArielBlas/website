import { ButtonProps } from "@components/atoms/Button";
import { SliderProps } from "@components/molecules/Slider/Slider.types";
import { ImageProps } from "next/image";

export interface HeroSectionProps {
  title: string;
  description: string;
  button: ButtonProps;
  image: ImageProps;
  slider: SliderProps["items"];
  className?: string;
}
