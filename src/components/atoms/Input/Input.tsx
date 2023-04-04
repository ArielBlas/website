import React, { useState, useEffect } from "react";
import classnames from "classnames";

import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = (props) => {
  const [stateValue, setStateValue] = useState<string | undefined>("");
  const { className, onChange, type, value, name, placeholder, disabled } =
    props;

  const tailwind = `mt-1 px-3 py-2 bg-transparent border shadow-sm border-slate-300 
  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 
  block w-full rounded-md sm:text-sm focus:ring-1 text-black dark:text-white focus:ring-green-500  focus:border-green-500`;
  const classNames = classnames("ws-input", className, tailwind);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    if (onChange) return onChange(event);
    setStateValue(event.target.value);
  };

  useEffect(() => {
    setStateValue(value);
  }, [value]);

  if (type === "textarea") {
    return (
      <textarea
        className={classNames}
        onChange={handleChange}
        placeholder={placeholder}
        value={value || stateValue}
        name={name}
        key={name}
        disabled={disabled}
        style={{
          height: 200,
          resize: "none",
        }}
      />
    );
  }
  return (
    <input
      className={classNames}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      value={stateValue}
      name={name}
      key={name}
      disabled={disabled}
    />
  );
};

Input.defaultProps = {
  className: "",
  onChange: undefined,
  type: "",
  placeholder: "",
  value: "",
  name: "",
  disabled: false,
};

export { Input };
