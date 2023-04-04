import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTranslation } from "next-i18next";

import { Link } from "../../../components/atoms";

export default {
  title: "Atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  const { t } = useTranslation("home");

  args.children = t(args.children);

  return <Link {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "welcome_msg",
  href: "/",
};
