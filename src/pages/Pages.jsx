import React from "react";
import { Route, Routes } from "react-router-dom";
import Fast from "./Fast";
import Home from "./Home";
import Favorites from "./Favorites";
import Vegan from "./Vegan";
import GlutenFree from "./GlutenFree";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/vegan" element={<Vegan />} />
      <Route path="/glutenfree" element={<GlutenFree />} />
      <Route path="/fast" element={<Fast />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  return (
    <h4 style={{ padding: "2rem", color: "white"}}>
      You have landed on a page that doesn't exist
    </h4>
  );
}

export default Pages;
