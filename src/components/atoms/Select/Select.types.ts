export interface SelectProps {
  select?: {
    id?: number;
    name: string | undefined;
  };
  setSelect?(value: { name: string }): void;
  options: {
    id?: number;
    name: string;
  }[];
  className?: string;
}
