import { render } from "@testing-library/react";
import { Icon } from ".";

describe("Button", () => {
  it("Should render the icon", () => {
    let name = "check";
    const { container } = render(<Icon name={name}></Icon>);

    const icon = container.querySelector(".ws-icon");
  });
});
