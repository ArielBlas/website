import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTranslation } from "next-i18next";

import { Divider, Text } from "@components/atoms";

export default {
  title: "Atoms/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Text>{`${t("example")} 1`}</Text>
      <Divider {...args} />
      <Text>{`${t("example")} 2`}</Text>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  className: "",
};
