import { timesTwo } from "./../main/04_testing/TestFunctionsJEST";

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
}) // name of the test


// TESTING SMALL FUNCTIONS WITH jest
// - jest library comes from create-react-app
// - test() args: (1) name of test (2) callback function of what should be tested
//
// REACT TESTING LIBRARY
//- Testing Library: useful to use with React or outside of React.
//  - help us render elements so that we can test the output
