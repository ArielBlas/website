import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("Should render the Header", () => {
    const { container } = render(
      <Header brand={"brand"} items={[]} button={{ children: "button" }} />
    );

    const header = container.querySelector(".ws-header");

    expect(header).toBeInTheDocument();
  });
});
