import { render } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  it("Should render the Footer", () => {
    const { container } = render(<Footer text="footer" />);

    const nav = container.querySelector(".ws-footer");

    expect(nav).toBeInTheDocument();
  });
});
