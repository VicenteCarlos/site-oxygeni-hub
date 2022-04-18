import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <img
        className="logo"
        src="../../assets/img/oxygenimain.svg"
        alt="OxygeniLogo"
      />
      <nav className="navegacao">
        <a className="item" href="#">
          Home
        </a>
        <a className="item" href="#">
          Sobre Nós
        </a>
        <a className="item" href="#">
          Faça Parte
        </a>
        <a className="item" href="#">
          Eventos
        </a>
      </nav>
    </StyledHeader>
  );
};
