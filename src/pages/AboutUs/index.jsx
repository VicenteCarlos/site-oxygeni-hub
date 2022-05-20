import { StyledMain } from "./style";
import { motion } from "framer-motion";
import { CardGroupCeuma } from "../../components/CardGroupCeuma";
import styled from "styled-components";

const AboutUs = () => (
  <StyledMain
    as={motion.main}s
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <section className="container">
      <div className="conteudo">
        <img
          className="imgmain"
          alt="imgmain"
          src="https://img.freepik.com/vetores-gratis/pessoas-minusculas-testando-a-garantia-de-qualidade-em-ilustracao-vetorial-plana-de-software-isolado-personagem-de-desenho-animado-corrigindo-bugs-no-dispositivo-de-hardware-teste-de-aplicativo-e-conceito-de-servico-de-ti_74855-10172.jpg?t=st=1650424195~exp=1650424795~hmac=d6f879b3f1f9ea6f013256c32123c3469760732dfdcbb08101dccfb9745e9910&w=996"
        />
        <div>
          <h1 className="titulo">O que é um HUB?</h1>
          <p className="texto">
            São ambientes com fácil acesso à mão de obra qualificada e que
            contam com a presença de entidades apoiadoras como aceleradoras e
            incubadoras
          </p>
        </div>
      </div>
    </section>
    <section className="container2">
      <img
        className="imgtime"
        src="https://cdn.discordapp.com/attachments/691321430586949762/966348085041172520/Capturar.PNG"
        alt="Time de inovação"
      />
      <div className="conteudo2">
        <h2 className="titulo">Time de Inovação</h2>
        <p className="texto">Missão: Operacionalizar as atividades do Hub</p>
      </div>
    </section>
    <section className="container3">
      <div className="conteudo3">
        <h2 className="titulo">Ecossistema de Inovação</h2>
      </div>
      <img
        className="imgeco"
        src="https://cdn.discordapp.com/attachments/691321430586949762/966393115101507595/ecossistema.PNG
"
        alt="Ecossistema do Hub"
      />
    </section>
    <section className="container4">
      <CardGroupCeuma />
    </section>
  </StyledMain>
);

const H1 = styled.h1`
  font-size: 30px;
  color: #1c2f5d;
`;

export { AboutUs };
