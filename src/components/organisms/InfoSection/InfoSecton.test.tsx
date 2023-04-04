import { render } from "@testing-library/react";
import { InfoSection } from ".";

describe("InfoSection", () => {
  it("Should render the InfoSection", () => {
    const { container } = render(
      <InfoSection
        title="title"
        description="description"
        button={{ children: "button" }}
      />
    );

    const infoSection = container.querySelector(".ws-infoSection");

    expect(infoSection).toBeInTheDocument();
  });
});
