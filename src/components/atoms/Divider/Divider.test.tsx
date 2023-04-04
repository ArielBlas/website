import { render } from "@testing-library/react";
import { Divider } from ".";

describe("Divider", () => {
  it("Should render the Divider", () => {
    const { container } = render(<Divider />);

    const divider = container.querySelector(".ws-divider");

    expect(divider).toBeInTheDocument();
  });
});
