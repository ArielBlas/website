import { render } from "@testing-library/react";
import { Card } from ".";

describe("Card", () => {
  it("Should render the Card", () => {
    const { container } = render(
      <Card
        title="title"
        description="description"
        image={{
          src: "/",
          layout: "fill",
        }}
      />
    );

    const card = container.querySelector(".ws-card");

    expect(card).toBeInTheDocument();
  });
});
