import { render } from "@testing-library/react";
import { ContactSection } from ".";

describe("ContactSection", () => {
  it("Should render the ContactSection", () => {
    const { container } = render(
      <ContactSection
        title="title"
        formGroup={{ items: [], buttons: [{ children: "button" }] }}
      />
    );

    const contactSection = container.querySelector(".ws-contactSection");

    expect(contactSection).toBeInTheDocument();
  });
});
