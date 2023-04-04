import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTranslation } from "next-i18next";

import { Label, Input } from "@components/atoms";

export default {
  title: "Atoms/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => {
  const { t } = useTranslation("common");

  args.children = t(args.children);

  return (
    <>
      <Label {...args} />
      <Input disabled />
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: "greeting",
};
