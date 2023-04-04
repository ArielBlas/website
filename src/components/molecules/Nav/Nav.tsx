import React from "react";
import classnames from "classnames";

import { Link } from "@components/atoms";
import { NavProps } from "./Nav.types";

const Nav: React.FC<NavProps> = (props) => {
  const { items, className } = props;

  const tailwind = `flex`;
  const classNames = classnames("ws-nav", className, tailwind);

  return (
    <nav>
      <ul className={classNames}>
        {items.map((item) => (
          <li key={item.id} className="px-3 py-2">
            <Link {...item}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  className: "",
};

export { Nav };
