import { render } from "@testing-library/react";
import { Label } from ".";

describe("Label", () => {
  it("Should render the text in the Label", () => {
    let text = "Label text";
    const { container } = render(<Label>{text}</Label>);

    const label = container.querySelector("label");

    expect(label).toHaveTextContent(text);
  });
});
