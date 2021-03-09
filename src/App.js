import React, { useState , useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Components } from "./main/01_components/Components";
import { StateAndTree } from "./main/02_state/StateAndTree";
import { AsyncData } from "./main/03_data/AsyncData";
import { AppTest } from "./main/04_testing/AppTest";
import { Routing } from "./main/05_router/Routing";

function Home(){
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}
function App() {
  const user = "nealebanagale"
  return  (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ch1" element={<Components />} />
        <Route path="/ch2" element={<StateAndTree />} />
        <Route path="/ch3" element={<AsyncData login={user}/>} />
        <Route path="/ch4" element={<AppTest />} />
        <Route path="/ch5/*" element={<Routing />} />
      </Routes>
    </div>
  );
}

export default App;

// ROUTER
// - routes tells the router which components to render whenever the location changes
