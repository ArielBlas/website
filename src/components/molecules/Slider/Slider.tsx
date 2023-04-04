import React from "react";
import classnames from "classnames";
import ReactSlider from "react-slick";
import Image from "next/image";

import { Text } from "@components/atoms";
import { SliderProps } from "./Slider.types";

const Slider: React.FC<SliderProps> = (props) => {
  const { items, className, style } = props;

  const tailwind = `flex justify-around w-full my-2`;
  const classNames = classnames("ws-slider", className, tailwind);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={classNames} style={style}>
      <div style={{ width: "100%" }}>
        <ReactSlider {...settings}>
          {items.map((item) => (
            <div key={item.id}>
              <div className="p-5 flex justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  layout={item.layout}
                  className="text-black dark:text-white"
                />
              </div>
            </div>
          ))}
        </ReactSlider>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  className: "",
};

export { Slider };
