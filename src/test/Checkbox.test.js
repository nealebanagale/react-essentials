import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./../main/04_testing/Checkbox";

test("selecting checkbox", () => {
  // App renders
  const { getByLabelText } = render(<Checkbox />) // from testing lib
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);  // from testing lib
  expect(checkbox.checked).toEqual(true)
})


// TESTING HOOKS WITH REACT TESTING LIBRARY
