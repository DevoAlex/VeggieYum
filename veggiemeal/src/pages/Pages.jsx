import React from "react";
import { Route, Routes } from "react-router-dom";
import Fast from "./Fast";
import Home from "./Home";
import Saved from "./Saved";
import Vegan from "./Vegan";
import GlutenFree from "./GlutenFree";
import Searched from "./Searched";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/vegan" element={<Vegan />} />
      <Route path="/glutenfree" element={<GlutenFree />} />
      <Route path="/fast" element={<Fast />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
