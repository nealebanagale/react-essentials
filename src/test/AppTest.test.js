import { render } from "@testing-library/react"
import React from "react"
import AppTest from "./../main/04_testing/AppTest"

test("renders an h1", () => {
  // renders App
  const {getByText} = render (<AppTest />); // query
  const h1 = getByText(/Hello Rect Testing Library/); // regulat expression = /<string>/
  expect(h1).toHaveTextContent("Hello Rect Testing Library")
})
/**
* Test:
function App({ login }) {
  return  (
    <div>
      <h1>Hello Rect Testing Library</h1>
    </div>
  );
}
**/


// REACT TESTING LIBRARY
// - query: reaches out to element and return information
// - run: > npm test
