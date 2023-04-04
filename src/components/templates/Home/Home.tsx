import React from "react";
import classnames from "classnames";

import {
  Header,
  HeroSection,
  InfoSection,
  FeatureSection,
  ContactSection,
  Footer,
} from "@components/organisms";
import { Divider } from "@components/atoms";
import { HomeProps } from "./Home.types";

const Home: React.FC<HomeProps> = (props) => {
  const {
    header,
    heroSection,
    infoSection,
    featureSection,
    contactSection,
    footer,
    className,
  } = props;

  const tailwind = ``;
  const classNames = classnames("ws-home", className, tailwind);

  return (
    <div className={classNames}>
      <Header {...header} />
      <HeroSection {...heroSection} />
      <Divider />
      <InfoSection {...infoSection} />
      <Divider />
      <FeatureSection {...featureSection} />
      <Divider />
      <ContactSection {...contactSection} />
      <Divider />
      <Footer {...footer} />
    </div>
  );
};

Home.defaultProps = {
  className: "",
};

export { Home };
