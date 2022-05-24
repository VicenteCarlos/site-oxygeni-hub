import { StyledMain } from "./style";
import { Cards } from "../../components";
import { Itens } from "../../assets/js/mocks";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../providers/ModalProvider";
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css"


const whatDo = new Array(3).fill(0);

const Home = () => {
  const { modalIsOpen } = useModal();

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <AnimatePresence>
      <StyledMain
        modalIsOpen={modalIsOpen}
        as={motion.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <motion.section className="s-1">
          <img
            src="https://cdn.discordapp.com/attachments/691321430586949762/974717805859577906/unknown.png"
            alt="oxygeni"
          />
          <p>
            Iniciativa que surgiu para viabilizar projetos de inovação por meio
            do conhecimento e conexões.
          </p>
        </motion.section>
        <section className="s-2">
          <div className="content">
            <div>
              {whatDo.map((item, i) => (
                <h2 className={`h2-${i + 1}`}>O que fazemos</h2>
              ))}
            </div>
            <p>
              Uma iniciativa que surgiu para viabilizar projetos de inovação por
              meio do conhecimento e conexões
            </p>
          </div>
          <img
            src="https://www.resumenerd.com/blog/wp-content/uploads/2020/02/The-Career-Shift-Resume-04.png"
            alt="#"
            width="550px"
          />
        </section>
        <section className="s-3" data-aos="fade-right">
          <h2>Nossos Produtos</h2>
          <div className="cards-container">
            {Itens.map((item, i) => (
              <Cards key={i} item={item} />
            ))}
          </div>
        </section>
      </StyledMain>
    </AnimatePresence>
  );
};

export { Home };
