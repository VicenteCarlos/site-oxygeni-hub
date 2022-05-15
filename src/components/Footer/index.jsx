import { StyledFooter } from "./style";

const Footer = () => (
  <StyledFooter>
    <button className="botao-1">fale conosco!</button>
    <div className="redes">
      <a href="https://www.linkedin.com/company/oxygeni-hub/" target="_blank">
        <img
          className="redesocial"
          src="https://cdn.discordapp.com/attachments/691321430586949762/966139088195432458/iconelinkedln_1.png"
          alt="linkedinOxygeni"
        />
      </a>
      <a href="https://www.instagram.com/oxygenihub/" target="_blank">
        {" "}
        <img
          className="redesocial"
          src="https://cdn.discordapp.com/attachments/691321430586949762/966139777885806662/iconeinsta.png"
          alt="Instagram Oxygeni"
        />{" "}
      </a>
    </div>
    <img id="logo" src="https://cdn.discordapp.com/attachments/691321430586949762/974717805859577906/unknown.png" alt="logoOxygeni" />
    <div className="conteudo">
      <h2 className="frase">FAÇA PARTE</h2>
      <h2 className="frase-2">FAÇA PARTE</h2>
      <h2 className="frase-3">FAÇA PARTE</h2>
      <button className="botao">fale conosco!</button>
    </div>
    
  </StyledFooter>
);

export { Footer }
