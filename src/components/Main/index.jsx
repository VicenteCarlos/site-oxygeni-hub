import { StyledMain } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <section class="s-1">
        <img src="https://i.ibb.co/bXJHJPH/main-Oxygeni.png" alt="oxygeni" />
        <p>
          Iniciativa que surgiu para viabilizar projetos de inovação por meio do
          conhecimento e conexões.
        </p>
      </section>
      <section class="s-2">
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
    </StyledMain>
  );
};
