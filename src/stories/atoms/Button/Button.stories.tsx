import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTranslation } from "next-i18next";

import { Button } from "@components/atoms";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      name: "children",
      control: "text",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { t } = useTranslation("common");

  args.children = t(args.children);

  return <Button {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "greeting",
};
