import React from "react";
import classnames from "classnames";
import Image from "next/image";

import { Text } from "@components/atoms";
import { Button } from "@components/atoms";
import { Slider } from "@components/molecules";

import { HeroSectionProps } from "./HeroSection.types";

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { title, description, image, button, slider, className } = props;

  const tailwind = `flex flex-col items-center container mx-auto px-3`;
  const classNames = classnames("ws-heroSection", className, tailwind);

  return (
    <section className={classNames}>
      <div className="flex flex-col md:flex-row items-center justify-around w-full py-8 md:py-14">
        <div className="flex flex-col text-center md:text-start">
          <Text className="text-3xl md:text-4xl font-bold pb-2">{title}</Text>
          <Text
            className="text-4xl md:text-5xl font-semibold text-gray-600 dark:text-gray-300"
            style={{
              background:
                "-webkit-linear-gradient(45deg, #71b7ff, #00ff95 80%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            {description}
          </Text>
          <div className="my-5 md:mt-10">
            <Button {...button} />
          </div>
        </div>

        <div>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout={image.layout}
            className="hero-image text-black dark:text-white"
          />
        </div>
      </div>
      <Slider items={slider} />
    </section>
  );
};

HeroSection.defaultProps = {
  className: "",
};

export { HeroSection };
