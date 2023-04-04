import React from "react";
import classnames from "classnames";
import Image from "next/image";
import { Text } from "@components/atoms";
import { FooterProps } from "./Footer.types";

const Footer: React.FC<FooterProps> = (props) => {
  const { className, text, medias } = props;

  const tailwind = `container mx-auto py-2 md:py-4 px-2`;
  const classNames = classnames("ws-footer", className, tailwind);

  return (
    <div className={classNames}>
      <div className="flex justify-center pb-4 gap-4">
        {medias?.map((media, idx) => (
          <Image
            {...media}
            alt={"media-" + idx}
            className="text-black dark:text-white cursor-pointer"
            key={idx}
          />
        ))}
      </div>

      <Text className="text-sm md:text-base text-center text-gray-400 dark:text-gray-400">
        {text}
      </Text>
    </div>
  );
};

Footer.defaultProps = {
  className: "",
};

export { Footer };
