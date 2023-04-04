import React from "react";
import classnames from "classnames";

import { Text } from "@components/atoms";
import { Button } from "@components/atoms";
import { InfoSectionProps } from "./InfoSection.types";

const InfoSection: React.FC<InfoSectionProps> = (props) => {
  const { title, description, button, className, pdf } = props;

  const tailwind = `flex flex-col items-center py-8 md:py-14 px-2`;
  const classNames = classnames("ws-infoSection", className, tailwind);

  return (
    <div className={classNames}>
      <Text className="text-3xl md:text-4xl font-semibold pb-2 md:pb-5">
        {title}
      </Text>

      <Text className="my-2 md:my-4 w-full md:w-[700px] text-1xl md:text-2xl text-center p-4 md:p-10 text-gray-400 dark:text-gray-400 ">
        {description}
      </Text>

      <a href={pdf} download={pdf}>
        <Button {...button} />
      </a>
    </div>
  );
};

InfoSection.defaultProps = {
  className: "",
};

export { InfoSection };
