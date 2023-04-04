import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTranslation } from "next-i18next";

import { Card } from "@components/molecules";

export default {
  title: "Molecules/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  const { t } = useTranslation("common");

  args.title = t(args.title);
  args.image.alt = t(args.image.alt || "");

  return <Card {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  title: "greeting",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis deserunt optio repellendus quas iste. Nulla magnam saepe, debitis nisi velit est vel voluptatem labore similique dolore, veritatis voluptatum cupiditate.",
  image: {
    src: "https://images.unsplash.com/photo-1663076121570-eb6e69bdde3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80",
    alt: "greeting",
    width: 1000,
    height: 500,
  },
};
