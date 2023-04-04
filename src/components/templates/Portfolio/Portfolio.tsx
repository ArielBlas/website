import React from "react";
import classnames from "classnames";

import { Header, FeatureSection, Footer } from "@components/organisms";
import { Divider } from "@components/atoms";
import { PortfolioProps } from "./Portfolio.types";

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { header, featureSection, footer, className } = props;

  const tailwind = ``;
  const classNames = classnames("ws-portfolio", className, tailwind);

  return (
    <div className={classNames}>
      <Header {...header} />
      <FeatureSection {...featureSection} />
      <Divider />
      <Footer {...footer} />
    </div>
  );
};

Portfolio.defaultProps = {
  className: "",
};

export { Portfolio };
