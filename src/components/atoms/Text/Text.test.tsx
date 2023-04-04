import { render } from "@testing-library/react";
import { Text } from ".";

describe("Text", () => {
  it("Should render the content in the Text", () => {
    let text = "text";
    const { container } = render(<Text>{text}</Text>);

    const content = container.querySelector("p");

    expect(content).toHaveTextContent(text);
  });
});
