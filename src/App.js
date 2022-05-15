import { Header } from "./components/Header";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import { Footer } from "./components/Footer";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);


  // const [count, setCount] = useState(0);

  // const handler = () => setCount(count + 1 );

  return (
    <>
      {/* <button onClick={handler}>Counter:{count} </button> */}
      <button onClick={() => setIsOpen(!modalIsOpen)}>Open Modal</button>
      <Modal
       isOpen={modalIsOpen}
       OnRequestClose={() => setIsOpen(!modalIsOpen)}
       contentLabel="Example Modal"
       overlayClassName="modal-overlay"
       className="modal-content"
      >

        <button onClick={() => setIsOpen(!modalIsOpen)}>Close modal</button>
      </Modal>
       <GlobalStyle />
       {/* <Header />    */}
      <Rotas />
      <Footer /> 
    </>
  );
};
