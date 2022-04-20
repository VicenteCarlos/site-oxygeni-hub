import { StyledFooter } from "./style";

export const Footer = () => (
  <StyledFooter>
    <div className="imagem">
      <img
        className="logoRodape"
        src="https://cdn.discordapp.com/attachments/691321430586949762/966129618929188894/logoOxygeni.png"
        alt="logoOxygeni"
      />
    </div>
    <div className="redes">
      <a href="https://www.linkedin.com/company/oxygeni-hub/" target="_blank">
        <img
          className="redesocial"
          src="https://cdn.discordapp.com/attachments/691321430586949762/966127417108361236/iconelinkedln.png"
          alt="linkedinOxygeni"
        />
      </a>
      <a
        href="https://cdn.discordapp.com/attachments/691321430586949762/966126889649467402/iconeInstagram.png"
        target="_blank"
      >
        {" "}
        <img
          className="redesocial"
          src="https://cdn.discordapp.com/attachments/691321430586949762/966126889649467402/iconeInstagram.png"
          alt="Instagram Oxygeni"
        />{" "}
      </a>
    </div>
    <div className="conteudo">
      <h2 className="frase">FAÇA PARTE</h2>
      <h2 className="frase-2">FAÇA PARTE</h2>
      <h2 className="frase-3">FAÇA PARTE</h2>
      <button className="botao">fale conosco!</button>
    </div>
  </StyledFooter>
);
