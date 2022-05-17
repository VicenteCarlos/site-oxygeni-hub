import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Opportunities } from "../pages/Opportunities";
import { Bepartofit } from "../pages/Bepartofit";
import { Events } from "../pages/Events";

export const Rotas = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/opportunities" element={<Opportunities />} />
    <Route path="/bepartofit" element={<Bepartofit />} />
    <Route path="/events" element={<Events />} />
  </Routes>
);
