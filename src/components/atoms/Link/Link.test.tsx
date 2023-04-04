import { render } from "@testing-library/react";
import { Link } from ".";

describe("Link", () => {
  it("Should render the text in the Link", () => {
    let text = "Link text";
    const { container } = render(<Link href="/">{text}</Link>);

    const link = container.querySelector("a");

    expect(link).toHaveTextContent(text);
  });
});
