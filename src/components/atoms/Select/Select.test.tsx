import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];

  it("renders the select button", () => {
    const { getByRole } = render(<Select options={options} />);
    const selectButton = getByRole("button");
    expect(selectButton).toBeInTheDocument();
  });

  it("renders the option list when the button is clicked", () => {
    const { getByRole, queryByText } = render(<Select options={options} />);
    const selectButton = getByRole("button");
    fireEvent.click(selectButton);
    const option1 = queryByText("Option 1");
    const option2 = queryByText("Option 2");
    const option3 = queryByText("Option 3");
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it("updates the selected option when an option is clicked", () => {
    const { getByRole, getByText } = render(<Select options={options} />);
    const selectButton = getByRole("button");
    fireEvent.click(selectButton);
    const option2 = getByText("Option 2");
    fireEvent.click(option2);
    expect(selectButton).toHaveTextContent("Option 2");
  });
});
