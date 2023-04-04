import { render } from "@testing-library/react";
import { HeroSection } from ".";

describe("HeroSection", () => {
  it("Should render the HeroSection", () => {
    const { container } = render(
      <HeroSection
        title="title"
        description="description"
        slider={[]}
        button={{ children: "button" }}
      />
    );

    const heroSection = container.querySelector(".ws-heroSection");

    expect(heroSection).toBeInTheDocument();
  });
});
