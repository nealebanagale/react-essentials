import React, { useState , useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Error404, Services, CompanyHistory, Location } from "./RoutingPages";

export function Routing() {
  return  (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />}/>
          <Route path="history" element={<CompanyHistory />}/>
          <Route path="location" element={<Location />}/>
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </div>
  );
}

// ROUTER
// - routes tells the router which components to render whenever the location changes
