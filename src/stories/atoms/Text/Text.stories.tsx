import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTranslation } from "next-i18next";

import { Text } from "@components/atoms";

export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  const { t } = useTranslation("common");

  args.children = t(args.children);

  return <Text {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "greeting",
};
