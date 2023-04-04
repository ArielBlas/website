import React from "react";
import NextLink from "next/link";
import classnames from "classnames";

import { LinkProps } from "./Link.types";

const Link: React.FC<LinkProps> = (props) => {
  const { children, href, className, locale, active, target } = props;

  const tailwind = `dark:text-white hover:text-green-500 dark:hover:text-green-500`;
  const classNames = classnames("ws-link", className, tailwind, {
    "text-green-500 dark:text-green-500": active,
  });

  return (
    <NextLink href={href} locale={locale}>
      <a className={classNames} target={target}>
        {children}
      </a>
    </NextLink>
  );
};

Link.defaultProps = {
  locale: "",
  className: "",
};

export { Link };
