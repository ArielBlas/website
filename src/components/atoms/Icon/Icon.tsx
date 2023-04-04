import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { IconProps } from "./Icon.types";
import { MoonIcon, SunIcon, CheckIcon } from "@heroicons/react/24/outline";

const Icon: React.FC<IconProps> = (props) => {
  const { className, name } = props;

  const tailwind = `inline-block p-[0.15rem]`;
  const classNames = classnames("ws-icon", className, tailwind);

  const selectIcon = (icon: string) => {
    let result;
    switch (icon) {
      case "moon":
        result = <MoonIcon className="h-5 w-5 " />;
        break;
      case "sun":
        result = <SunIcon className="h-5 w-5 " />;
        break;
      case "check":
        result = <CheckIcon className="h-3 w-3 " />;
        break;
      default:
        result = null;
    }

    return result;
  };

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={classNames}>
      {domLoaded ? (name ? selectIcon(name) : null) : ""}
    </div>
  );
};

Icon.defaultProps = {
  className: "",
};

export { Icon };
