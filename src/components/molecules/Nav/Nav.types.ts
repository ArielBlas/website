import { LinkProps } from "@components/atoms/Link";

export interface NavItem extends LinkProps {
  id: number;
  name: string;
}

export interface NavProps {
  items: NavItem[];
  className?: string;
}
