import { useModal } from "../../providers/ModalProvider";
import { StyledMain } from "./style";

const Modal = () => {
  const { modalIsOpen, setModalIsOpen, modalConfig } = useModal();

  return (
    <StyledMain modalConfig={modalConfig}>
      <div>
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>X</button>
        <figure>
          <img src={modalConfig.img} alt={modalConfig.title} />
          <figcaption>{modalConfig.title}</figcaption>
        </figure>
        <p>{modalConfig.description}</p>
      </div>
    </StyledMain>
  );
};

export { Modal };
