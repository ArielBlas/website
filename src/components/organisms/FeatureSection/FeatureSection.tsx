import React from "react";
import classnames from "classnames";

import { Text, Button } from "@components/atoms";
import { Card } from "@components/molecules";
import { FeatureSectionProps } from "./FeatureSection.types";

const FeatureSection: React.FC<FeatureSectionProps> = (props) => {
  const { title, items, button, className } = props;

  const tailwind = `flex flex-col items-center container mx-auto py-8 md:py-14`;
  const classNames = classnames("ws-featureSection", className, tailwind);

  return (
    <div className={classNames}>
      <Text className="text-3xl md:text-4xl font-semibold">{title}</Text>

      <div className="my-2 md:my-4 py-4 md:py-10">
        {items.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
      {button && <Button {...button} />}
    </div>
  );
};

FeatureSection.defaultProps = {
  className: "",
};

export { FeatureSection };
