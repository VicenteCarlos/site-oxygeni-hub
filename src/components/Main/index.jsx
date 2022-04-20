import { StyledMain } from "./style";
import { Cards } from "../Cards";
import { Itens } from "../../js";

export const Main = () => {
  return (
    <StyledMain>
      <section className="s-1">
        <img
          src="https://cdn.discordapp.com/attachments/691321430586949762/966129618929188894/logoOxygeni.png"
          alt="oxygeni"
        />
        <p>
          Iniciativa que surgiu para viabilizar projetos de inovação por meio do
          conhecimento e conexões.
        </p>
      </section>
      <section className="s-2">
        <div class="content">
          <div>
            <h2 className="h2-1">O que fazemos</h2>
            <h2 className="h2-2">O que fazemos</h2>
            <h2 className="h2-3">O que fazemos</h2>
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
        <h2>Nosso Projetos</h2>
        <div>
          {Itens.map((item) => (
            <Cards item={item} />
          ))}
        </div>
      </section>
    </StyledMain>
  );
};
