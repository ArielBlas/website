import React from "react";
import classnames from "classnames";

import { Text } from "@components/atoms";
import { FormGroup } from "@components/molecules";
import { ContactSectionProps } from "./ContactSection.types";

const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const { title, formGroup, className } = props;

  const tailwind = `flex flex-col items-center container mx-auto py-8 md:py-14 px-2`;
  const classNames = classnames("ws-contactSection", className, tailwind);

  return (
    <div className={classNames} id="contact-me">
      <Text className="text-3xl md:text-4xl font-semibold">{title}</Text>

      <div
        style={{ maxWidth: 600, width: "100%" }}
        className="my-2 md:my-4 py-4 md:py-10"
      >
        <FormGroup {...formGroup} />
      </div>
    </div>
  );
};

ContactSection.defaultProps = {
  className: "",
};

export { ContactSection };
