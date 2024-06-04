import React, { useState } from "react";
import classnames from "classnames";

import { Nav } from "@components/molecules";
import { Button, Text, Link, Select } from "@components/atoms";
import { HeaderProps } from "./Header.types";
import { useTranslation } from "next-i18next";
// import useTranslate from "src/hooks/useTranslate";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";

const Header: React.FC<HeaderProps> = (props) => {
  const [show, setShow] = useState(false);
  const { items, brand, button, className, options, setSelect, select } = props;
  const { t } = useTranslation("common");
  // const [translation, setTranslation] = useTranslate();
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  const tailwind = `flex flex-wrap justify-between items-center container mx-auto p-3`;
  const classNames = classnames("ws-header", className, tailwind);

  return (
    <header className={classNames}>
      <NextLink href={"/"}>
        <div className="flex">
          <Image
            {...brand}
            alt="logo"
            className="text-black dark:text-white cursor-pointer"
          />
        </div>
      </NextLink>
      <button
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setShow((prevShow) => !prevShow)}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div className={`${!show && "hidden"} w-full md:block md:w-auto`}>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Nav items={items} />
          <Select
            options={options}
            setSelect={setSelect}
            select={options[options.findIndex((o) => o.name === select?.name)]}
          />
          <Button {...button} />
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  className: "",
};

export { Header };
