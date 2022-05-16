import { useContext ,createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal };
