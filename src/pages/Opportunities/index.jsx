import { StyledMain } from "./style";
import { motion } from "framer-motion";
import { useDiscoverPage } from "../../providers/DiscoverPageProvider";
import { useModal } from "../../providers/ModalProvider";
import {configModal} from "../../assets/js/mocks"

export const Opportunities = () => {
  const { setPage } = useDiscoverPage();
  const { modalIsOpen, setModalIsOpen, setModalConfig } = useModal();

  setPage("opportunities");

  return (
    <StyledMain
      modalIsOpen={modalIsOpen}
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <hgroup>
         <h2>Construa as suas habilidades de desenvolvedor</h2>
         <h3>Curso oferecidos pelo Oxygeni-Hub</h3>
        </hgroup>
        <section className="s-1">
          <img
            src="https://media1.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif?cid=ecf05e47uklntv2pa1u8wm6t5vow1f60jyqufww563vhhpaa&rid=giphy.gif&ct=s"
            alt="illustration"
          />
          <div className="icons">
            {configModal.map((item, i) => (
              <section>
              <figure>
                <img src={item.img_v1} alt={`logo_${item.title}`} className={item.title}/>
                <button onClick={() => {
                  setModalIsOpen(!modalIsOpen)
                  setModalConfig(configModal[i])
                }}>
                  <figcaption id={item.title}>{item.title}</figcaption>
                </button>
              </figure>
            </section>
            ))}
          </div>
        </section>
      </div>
    </StyledMain>
  );
};
