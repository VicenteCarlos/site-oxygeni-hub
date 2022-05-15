import { Header } from "./components/Header";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import { Footer } from "./components/Footer";
import { useState } from "react";
import Modal from "react-modal";



export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />   
      <Rotas />
      <Footer /> 
    </>
  );
};
