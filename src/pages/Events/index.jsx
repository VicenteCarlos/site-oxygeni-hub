import { StyledMain } from "./style";

const Events = () => (
    <StyledMain>
  <section>
    <h2>Eventos</h2>
    <div class="bolinhas" id="bolinhas">
      <svg
        width="1.8rem"
        height="1.8rem"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="4.5"
          transform="matrix(1 0 0 -1 6.5 6.5)"
          stroke="#C4C4C4"
          stroke-width="4"
        />
      </svg>
      <svg
        width="1.8rem"
        height="1.8rem"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="4.5"
          transform="matrix(1 0 0 -1 6.5 6.5)"
          stroke="#C4C4C4"
          stroke-width="4"
        />
      </svg>
      <svg
        width="1.8rem"
        height="1.8rem"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="4.5"
          transform="matrix(1 0 0 -1 6.5 6.5)"
          stroke="#C4C4C4"
          stroke-width="4"
        />
      </svg>
      <svg
        width="1.8rem"
        height="1.8rem"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="4.5"
          transform="matrix(1 0 0 -1 6.5 6.5)"
          stroke="#C4C4C4"
          stroke-width="4"
        />
      </svg>
    </div>
    <section class="container1">
      <div class="conteudo0">
        <button className="botoes" id="botaoEsquerdo">
          <img
            src="https://cdn.discordapp.com/attachments/651404729766772763/975804728728494110/seta_esquerda.png"
            alt="seta esquerda"
          />
        </button>

        <div className="carrosel" id="carrosel">
          <div className="conteudoCarrossel" id="img">
            <div className="Inova-ceuma">
              <img
                src="https://cdn.discordapp.com/attachments/651404729766772763/975790786383867944/274015214_737060793945902_9129643980481039989_n.jpg"
                alt="Inova-ceuma"
              />
              <ul class="data">
                <li>qua ,</li>
                <li>13 abr. </li>
                <li>15:00</li>
              </ul>
              <h3>Inova-ceuma</h3>
              <a
                className="sympla"
                href="https://www.sympla.com.br/evento/minicursos-do-oxygeni-lab-abril/1547862"
                target="_blank"
              >
                ver detalhes
              </a>
            </div>

            <div className="Mini-curso-bloble">
              <img
                src="https://cdn.discordapp.com/attachments/651404729766772763/975791175992737803/279734237_563412011779118_6107163940925365642_n.jpg"
                alt="imagem-bubble"
              />
              <ul class="data">
                <li>seg ,</li>
                <li>02 Fev </li>
                <li>02:00</li>
              </ul>
              <h3>Mini-curso-bubble</h3>
              <a
                className="sympla"
                href="https://www.sympla.com.br/evento/minicursos-do-oxygeni-lab-abril/1547862"
                target="_blank"
              >
                ver detalhes
              </a>
            </div>

            <div className="mini-curso-linkedin">
              <img
                src="https://cdn.discordapp.com/attachments/651404729766772763/975791466897088612/279074274_678421946761481_1522844702858444867_n.jpg"
                alt="mini-curso-linkedin"
              />
              <ul className="data">
                <li>seg ,</li>
                <li>02 Fev </li>
                <li>02:00</li>
              </ul>
              <h3>mini-curso-linkedin</h3>
              <a
                className="sympla"
                href="https://www.sympla.com.br/evento/minicursos-do-oxygeni-lab-abril/1547862"
                target="_blank"
              >
                ver detalhes
              </a>
            </div>

            <div className="hackaton">
              <img
                src="https://cdn.discordapp.com/attachments/651404729766772763/975790786643886100/277940745_3191231261196963_694417343923052161_n.jpg"
                alt="hackaton"
              />
              <ul className="data">
                <li>qua ,</li>
                <li>06 abr. </li>
                <li>12:00</li>
              </ul>
              <h3>hackaton</h3>
              <a
                className="sympla"
                href="https://www.sympla.com.br/evento/minicursos-do-oxygeni-lab-abril/1547862"
                target="_blank"
              >
                ver detalhes
              </a>
            </div>
          </div>
        </div>
        <button className="botoes" id="botaoDireito">
          {" "}
          <img
            src="https://cdn.discordapp.com/attachments/651404729766772763/975805789149204490/seta_direta.png"
            alt="setaDireita"
          />
        </button>
      </div>
    </section>
    <section className="container2">
      <div className="conteudo2">
        <h2>Para ficar ligado nosso conteudo acesse o Simpla e instagram</h2>
        <div className="redesSociais">
          <a
            className="sympla"
            href="https://www.sympla.com.br/evento/minicursos-do-oxygeni-lab-abril/1547862"
            target="_blank"
          >
            sympla.com
          </a>
          <a href="https://www.instagram.com/oxygenihub/" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/691321430586949762/966139777885806662/iconeinsta.png"
              alt="Instagram Oxygeni"
            />
          </a>
        </div>
      </div>
    </section>
    <script src="script.js"></script>
  </section>
</StyledMain>
)

export { Events }