import { useModal } from "../../providers/ModalProvider";
import { StyledMain } from "./style";
import { motion } from "framer-motion";

const Modal = () => {
  const { modalIsOpen, setModalIsOpen, modalConfig } = useModal();

  return (
    <StyledMain 
      as={motion.main}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      modalConfig={modalConfig}
    >
      <motion.div
        initial={{y: "-100vh"}}
        animate={{y:"0vh"}}
        transition={{type: "spring", stiffness: 80, duration: 3}}
      >
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
      </motion.div>
    </StyledMain>
  );
};

export { Modal };
