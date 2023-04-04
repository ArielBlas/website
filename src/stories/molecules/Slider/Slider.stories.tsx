import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Slider } from "@components/molecules";

export default {
  title: "Molecules/Slider",
  component: Slider,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider
    {...args}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  items: [{ src: "" }],
};
