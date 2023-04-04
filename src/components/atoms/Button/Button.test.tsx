import { render } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("Should render the text in the Button", () => {
    let text = "Button text";
    const { container } = render(<Button>{text}</Button>);

    const button = container.querySelector("button");

    expect(button).toHaveTextContent(text);
  });
});
