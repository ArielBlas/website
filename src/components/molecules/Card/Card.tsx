import React from "react";
import classnames from "classnames";
import Image from "next/image";

import { Text, Group, Button, Link } from "@components/atoms";
import { CardProps } from "./Card.types";
import { Icon } from "@components/atoms/Icon";

const Card: React.FC<CardProps> = (props) => {
  const {
    className,
    title,
    description,
    position,
    image,
    button,
    technologies,
    link,
  } = props;

  const tailwind = `flex flex-col gap-6 p-4 md:p-8`;
  const classNames = classnames("ws-card", className, tailwind, {
    "md:flex-row": position == "left",
    "md:flex-row-reverse": position == "right",
  });

  return (
    <div className={classNames}>
      <div className="flex flex-1 md:w-3/6 shadow-md rounded-lg overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          layout={image.layout}
          className=" text-black dark:text-white"
        />
      </div>
      <Group className="flex flex-1">
        <Text className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
          {title}
        </Text>
        <Text className="text-sm md:text-base text-gray-400 dark:text-gray-400">
          {description}
        </Text>

        <div className="py-4 md:py-8 flex flex-wrap gap-y-5">
          {technologies?.map((name, idx) => (
            <div className="flex items-center gap-2 w-2/6" key={idx}>
              <Icon
                name="check"
                className="bg-green-500  text-white rounded-full"
              />
              <Text className="text-sm md:text-base">{name}</Text>
            </div>
          ))}
        </div>
        {button && (
          <div className="pt-2 flex items-center gap-4">
            <Button {...button} />

            {link?.href && <Link {...link} />}
          </div>
        )}
      </Group>
    </div>
  );
};

Card.defaultProps = {
  className: "",
  position: "left",
};

export { Card };
