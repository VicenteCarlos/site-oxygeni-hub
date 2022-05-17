import { useContext ,createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({})

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen, modalConfig, setModalConfig }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal };
