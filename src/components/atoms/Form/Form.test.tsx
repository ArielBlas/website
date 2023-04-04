import { render } from "@testing-library/react";
import { Form } from ".";

describe("Form", () => {
  it("Should render the text in the Form", () => {
    let text = "Form text";
    const { container } = render(
      <Form onSubmit={() => {}}>
        <div>{text}</div>
      </Form>
    );

    const form = container.querySelector("form");

    expect(form).toHaveTextContent(text);
  });
});
