import { render } from "@testing-library/react";
import { FormGroup } from ".";

describe("FormGroup", () => {
  it("Should render the FormGroup", () => {
    const { container } = render(
      <FormGroup
        items={[
          {
            label: "hola",
          },
        ]}
        buttons={[{ children: "text" }]}
        onSubmit={() => {}}
      />
    );

    const card = container.querySelector(".ws-formGroup");

    expect(card).toBeInTheDocument();
  });
});
