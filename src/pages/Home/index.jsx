import { StyledMain } from "./style";
import { Cards } from "../../components";
import { Itens } from "../../js";
import { AnimatePresence, motion } from "framer-motion";

const whatDo = new Array(3).fill(0);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => (
  <AnimatePresence>
    <StyledMain
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.section className="s-1">
        <img src="#" alt="oxygeni" />
        <p>
          Iniciativa que surgiu para viabilizar projetos de inovação por meio do
          conhecimento e conexões.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          src="https://www.resumenerd.com/blog/wp-content/uploads/2020/02/The-Career-Shift-Resume-04.png"
          alt="#"
          width="550px"
        />
      </section>
      <section className="s-3">
        <h2>Nossos Produtos</h2>
        <div>
            {Itens.map((item, i) => (
              <Cards key={i} item={item} />
            ))}
        </div>
      </section>
    </StyledMain>
  </AnimatePresence>
);

export { Home };
