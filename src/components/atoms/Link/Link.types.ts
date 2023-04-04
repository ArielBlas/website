import React from "react";

export interface LinkProps {
  children?: React.ReactNode | string;
  href: string;
  locale?: string;
  active?: boolean;
  className?: string;
  target?: string;
}
