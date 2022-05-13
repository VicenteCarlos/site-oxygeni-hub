import { AnimatePresence } from "framer-motion";
import {
  StyledMain,
  StyledSectionOne,
  StyledSectionTwo,
  StyledSectionThree,
} from "./style";
import { motion } from "framer-motion";
import { Cards } from "../../components/Cards";
import { Itens } from "../../assets/js/mocks";
import {useDiscoverPage} from "../../providers/DiscoverPageProvider"
let arr = new Array(3).fill(0);

const Home = () => {
  const {setPage} = useDiscoverPage()

  setPage("home")
  
  return (
    <>
      <AnimatePresence>
        <StyledMain
          as={motion.main}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <StyledSectionOne as={motion.section}>
            <img
              src="https://cdn.discordapp.com/attachments/691321430586949762/966129618929188894/logoOxygeni.png"
              alt="oxygeni"
            />
            <p>
              Iniciativa que surgiu para viabilizar projetos de inovação por meio
              do conhecimento e conexões.
            </p>
          </StyledSectionOne>
          <StyledSectionTwo>
            <div className="content">
              <div>
                {arr.map((item, i) => (
                  <h2 className={`h2-${i + 1}`}>O que fazemos</h2>
                ))}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <img
              src="https://www.resumenerd.com/blog/wp-content/uploads/2020/02/The-Career-Shift-Resume-04.png"
              alt="#"
              width="550px"
            />
          </StyledSectionTwo>
          <StyledSectionThree>
            <h2>Nossos Produtos</h2>
            <div>
              {Itens.map((item, i) => (
                <Cards key={i} item={item} />
              ))}
            </div>
          </StyledSectionThree>
        </StyledMain>
      </AnimatePresence>
    </>
  );
}

export { Home }
