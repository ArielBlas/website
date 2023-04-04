import React from "react";
import classnames from "classnames";
import { SelectProps } from "./Select.types";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Select: React.FC<SelectProps> = (props) => {
  const { className, select, setSelect, options } = props;
  const [slc, setSelected] = useState(select);

  return (
    <Listbox
      value={options[options.findIndex((o) => o.id === slc?.id)]}
      onChange={setSelect || setSelected}
    >
      {({ open }) => (
        <>
          <div className="relative inline-block">
            <Listbox.Button className="flex relative cursor-default rounded-md border border-gray-300 bg-white py-2 px-3 text-left shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm dark:bg-black">
              <span className="pointer-events-none inset-y-0 left-0 flex items-center ">
                <GlobeAltIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
              <span className="flex items-center">
                <span className="mx-3 block truncate  text-black dark:text-white">
                  {slc?.name}
                </span>
              </span>
              <span className="pointer-events-none  inset-y-0 right-0 flex items-center ">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options &&
                  options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        classnames(
                          active ? "text-white bg-green-500" : "text-gray-900",
                          "relative cursor-default select-none py-2 px-3"
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center justify-center">
                            <span
                              className={classnames(
                                selected ? "font-semibold " : "font-normal ",
                                selected
                                  ? active
                                    ? "text-white"
                                    : "text-green-500"
                                  : "",
                                " block truncate"
                              )}
                            >
                              {option.name}
                            </span>
                          </div>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

Select.defaultProps = {
  className: "",
};

export { Select };
