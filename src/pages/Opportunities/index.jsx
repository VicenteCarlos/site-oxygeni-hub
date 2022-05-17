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
        <h2>Construa as suas habilidades de desenvolvedor</h2>
        <section className="s-1">
          <img
            src="https://cdn.discordapp.com/attachments/651404729766772763/966410443159650444/Wavy_Bus-15_Single-01.jpg"
            alt="illustration"
          />
          <div className="icons">
            {configModal.map((item, i) => (
              <section>
              <figure id="js">
                <img src={item.img_v1} alt={`logo_${item.title}`} className={item.title}/>
                <button onClick={() => {
                  setModalIsOpen(!modalIsOpen)
                  setModalConfig(configModal[i])
                }}>
                  <figcaption id="nameBackGroundColorJS">{item.title}</figcaption>
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
