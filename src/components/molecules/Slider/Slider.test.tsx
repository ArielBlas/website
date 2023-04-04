import { render } from "@testing-library/react";
import { Slider } from ".";

describe("Slider", () => {
  it("Should render the Slider", () => {
    const { container } = render(<Slider items={[{ id: "1", src: "" }]} />);

    const slider = container.querySelector(".ws-slider");

    expect(slider).toBeInTheDocument();
  });
});
