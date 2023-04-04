import { render } from "@testing-library/react";
import { FeatureSection } from ".";

describe("FeatureSection", () => {
  it("Should render the FeatureSection", () => {
    const { container } = render(
      <FeatureSection
        title="title"
        items={[
          {
            title: "title",
            description: "description",
            image: {
              src: "/",
              layout: "fill",
            },
          },
        ]}
        button={{ children: "button" }}
      />
    );

    const featureSection = container.querySelector(".ws-featureSection");

    expect(featureSection).toBeInTheDocument();
  });
});
