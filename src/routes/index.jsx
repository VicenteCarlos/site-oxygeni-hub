import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Opportunities } from "../pages/Opportunities";

export const Rotas = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/opportunities" element={<Opportunities />} />
  </Routes>
);
