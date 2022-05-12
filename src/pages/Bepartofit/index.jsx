import { Form } from "../../components";
import { StyledMain, SectionInfos } from "./style"

const Bepartofit = () => (
  <StyledMain>
    <SectionInfos>
      <h2>Faça Parte</h2>
      <p>
        Você que tem espiríto jovem, é talentoso(a) e dedicado(a) ao que faz,
        adora inovação e tecnologia, além de estar pronto(a) para novos
        desafios, cadastre-se! Você pode ser o(a) próximo(a) a trabalhar
        conosco!
      </p>
    </SectionInfos>
    <section>
      <img src="#" alt="foto" />
      <img src="#" alt="foto" />
      <img src="#" alt="foto" />
    </section>
    <section>
      <Form />
    </section>
  </StyledMain>
);

export { Bepartofit };
