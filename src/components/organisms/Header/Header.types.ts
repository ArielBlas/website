import { NavProps } from "@components/molecules/Nav";
import { ButtonProps } from "@components/atoms/Button";
import { ImageProps } from "next/image";

export interface HeaderProps {
  brand: ImageProps;
  items: NavProps["items"];
  button: ButtonProps;
  className?: string;
  options: {
    id?: number;
    name: string;
  }[];
  select?: {
    id?: number;
    name: string | undefined;
  };
  setSelect?(value: { name: string }): void;
}
