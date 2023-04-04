import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { ButtonProps } from "./Button.types";
import { MoonIcon, SunIcon, CheckIcon } from "@heroicons/react/24/outline";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, className, type, icon, disabled } = props;

  const tailwind = `pointer-events-auto rounded-md bg-black dark:bg-white py-2.5 px-2.5 text-[0.8rem] 
    font-semibold leading-5 text-white dark:text-black hover:text-white hover:bg-green-500 
    hover:dark:text-white dark:hover:bg-green-500`;
  const classNames = classnames("ws-button", className, tailwind, {
    "opacity-50 cursor-not-allowed": disabled,
  });

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
        result = <CheckIcon className="h-5 w-5 " />;
        break;
      default:
        result = children;
    }

    return result;
  };

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <button
      className={classNames}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {domLoaded ? (icon ? selectIcon(icon) : children) : ""}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  icon: null,
  type: "button",
  disabled: undefined,
};

export { Button };
