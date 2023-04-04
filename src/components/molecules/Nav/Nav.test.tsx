import { render } from "@testing-library/react";
import { Nav } from ".";

describe("Nav", () => {
  it("Should render the Nav", () => {
    const { container } = render(
      <Nav items={[{ id: 1, name: "text", href: "/" }]} />
    );

    const nav = container.querySelector(".ws-nav");

    expect(nav).toBeInTheDocument();
  });
});
