import React, { useState , useEffect, useReducer} from "react";


// DESCTRUCTURING
const checklist = ["boots", "tent", "headlamp"];
console.log(checklist[1]);

const [mostImportantItem, second] =  ["boots", "tent", "headlamp"];
console.log(mostImportantItem)  // first item
console.log(second)

const [,, third] =  ["boots", "tent", "headlamp"];
console.log(third)

export function StateAndTree() {
  // USESTATE
  const what = useState("happy");
  const [emotion, setEmotion] = useState("happy");  // destructured
  const [secondary, setSecondary] = useState("tired");
  console.log(emotion);

  // USEEFFECT
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary])

  // USEREDUCER
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false);

  return (
    <>
      <h1>USE EFFECT</h1>
      <h1>Current emotion {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("enthuse")}>Enthuse</button>
      <button onClick={() => setSecondary("crabby")}>Crabby</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <br />
      <h1>USE REDUCER</h1>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

//Notes
// CONDITIONAL RENDERING
// - if:else, returns are Components:eturn <SecretComponent />
//
// DESCTRUCTURING ARRAYS AND OBJECTS
// - able to use the key of the object {key: value}
//   ex: func App(props) vs func App({auth})
// - DESCTRUCTURING: []
// - skipped element: , (comma)
// - Object destructuring : make the syntax in our components a little cleaner
//   by destructuring the props object
// - Array destructuring : help in state.
//
// USESTATE
// - returns array: 0 = undefined, 1 = function to update state
// - manage local variables that we need to keep track
//
// USEEFFECT
// - allows use to do something that doesn't have to do with the render component
// - takes: (1) callback function, (2) dependency array
// - dependency array: being watched of the useEffect, if value has changed
// - used in console messages, loading data
// - a side effect
//
// USEREDUCER
// - takes in the current state and it returns a new state
// - takes: (1) function, (2) initial state
