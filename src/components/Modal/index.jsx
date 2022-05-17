import { useModal } from "../../providers/ModalProvider";
import { StyledMain } from "./style";
import { motion } from "framer-motion";

const Modal = () => {
  const { modalIsOpen, setModalIsOpen, modalConfig } = useModal();

  return (
    <StyledMain modalConfig={modalConfig}>
      <div>
        <motion.button
          whileHover={{ scale: 1.5 }}
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          X
        </motion.button>
        <figure>
          <img src={modalConfig.img_v2} alt={modalConfig.title} />
          <figcaption>{modalConfig.title}</figcaption>
        </figure>
        <p>{modalConfig.description}</p>
      </div>
    </StyledMain>
  );
};

export { Modal };
