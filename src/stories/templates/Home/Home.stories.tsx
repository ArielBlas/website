import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Home } from "@components/templates";
import Logo from "../../../../public/logo.png";

export default {
  title: "Templates/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  header: {
    brand: { src: Logo, width: "60px", height: "60px" },
    items: [
      { id: 1, name: "Home", href: "/home" },
      { id: 2, name: "Portfolio", href: "/portfolio" },
    ],
    button: { children: "Contact" },
    options: [{ id: 1, name: "Home" }],
  },
  heroSection: {
    title: "Ariel Blas",
    description: "Full Stack Developer",
    button: {
      children: "Contact me",
    },
    image: {
      src: "",
    },
    slider: [{ src: "" }],
  },
  infoSection: {
    title: "About me",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo
  voluptates praesentium atque dicta vero minus quisquam magnam possimus.
  Adipisci unde culpa, illum illo assumenda odio perspiciatis! Nisi, quasi
  similique?`,
    button: {
      children: "Download CV",
    },
  },
  featureSection: {
    title: "Portfolio",
    items: [
      {
        title: "greeting",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis deserunt optio repellendus quas iste. Nulla magnam saepe, debitis nisi velit est vel voluptatem labore similique dolore, veritatis voluptatum cupiditate.",
        image: {
          src: "https://images.unsplash.com/photo-1663076121570-eb6e69bdde3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80",
          alt: "greeting",
          width: 1000,
          height: 500,
        },
      },
      {
        title: "greeting",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis deserunt optio repellendus quas iste. Nulla magnam saepe, debitis nisi velit est vel voluptatem labore similique dolore, veritatis voluptatum cupiditate.",
        image: {
          src: "https://images.unsplash.com/photo-1663076121570-eb6e69bdde3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80",
          alt: "greeting",
          width: 1000,
          height: 500,
        },
        position: "right",
      },
      {
        title: "greeting",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis deserunt optio repellendus quas iste. Nulla magnam saepe, debitis nisi velit est vel voluptatem labore similique dolore, veritatis voluptatum cupiditate.",
        image: {
          src: "https://images.unsplash.com/photo-1663076121570-eb6e69bdde3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3028&q=80",
          alt: "greeting",
          width: 1000,
          height: 500,
        },
      },
    ],
    button: {
      children: "See more",
    },
  },
  contactSection: {
    title: "Contact",
    formGroup: {
      items: [
        { label: "Email", type: "email" },
        { label: "Password", type: "password" },
      ],
      buttons: [{ children: "Submit" }],
      onSubmit: () => {},
    },
  },
  footer: { text: "Footer" },
};
