import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const Rotas = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
  </Routes>
);
