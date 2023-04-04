import { render } from "@testing-library/react";
import { Input } from ".";

describe("Input", () => {
  it("Should render the Input", () => {
    const { container } = render(<Input />);

    const input = container.querySelector("input");

    expect(input).toBeInTheDocument();
  });
});
