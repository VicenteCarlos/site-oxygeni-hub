import { useModal } from "../../providers/ModalProvider";

const Modal = () => {
  const {modalIsOpen, setModalIsOpen} = useModal() 
  
  return (
    <>
      <h1>Sou um modal coroi</h1>
    </>
  );
}

export { Modal };
