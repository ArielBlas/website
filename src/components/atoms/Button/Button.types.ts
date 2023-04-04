export interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: string | null;
  disabled?: boolean;
}
