import { render } from "@testing-library/react";
import { Home } from ".";

describe("Home", () => {
  it("Should render the Home", () => {
    const { container } = render(
      <Home
        header={{ brand: "brand", items: [], button: { children: "button" } }}
        heroSection={{
          title: "title",
          description: "description",
          slider: [],
          button: { children: "button" },
        }}
        infoSection={{
          title: "title",
          description: "description",
          button: { children: "button" },
        }}
        featureSection={{
          title: "title",
          items: [
            {
              title: "title",
              description: "description",
              image: {
                src: "/",
                layout: "fill",
              },
            },
          ],
          button: { children: "button" },
        }}
        contactSection={{
          title: "title",
          formGroup: { items: [], buttons: [{ children: "button" }] },
        }}
        footer={{
          text: "footer",
        }}
      />
    );

    const home = container.querySelector(".ws-home");

    expect(home).toBeInTheDocument();
  });
});
