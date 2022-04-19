import { StyledFooter } from "./style";

export const Footer = () => (
  <StyledFooter>
    <img className="logoRodape" src="oxygenimain.svg" alt="logoOxygeni" />
    <a href="https://www.linkedin.com/company/oxygeni-hub/" target="_blank">
      <img
        className="redesocial"
        src="iconeLinkedln.svg"
        alt="linkedin Oxygeni"
      />
    </a>
    <a href="https://www.instagram.com/oxygenihub/" target="_blank">
      {" "}
      <img
        className="redesocial"
        src="iconeInstagram.svg"
        alt="Instagram Oxygeni"
      />{" "}
    </a>
    <div className="conteudo">
      <p className="frase">Faça Parte</p>
      <p className="frase">Faça Parte</p>
      <p className="frase">Faça Parte</p>
      <button className="botao">fale conosco!</button>
    </div>
  </StyledFooter>
);
