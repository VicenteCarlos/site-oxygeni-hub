import { StyledDiv } from "./style";

const CardGroupCeuma = () => (
  <StyledDiv>
    <div class="cards cards-box">
      <div class="card">
        <div class="instituicao">
          <a
            href="https://www.extranet.ceuma.br/hotsite/"
            alt="Portal Ceuma"
            target="_blank"
          >
            <img
              src="https://i.pinimg.com/originals/f9/73/10/f97310806eb3781d7ac36b80dda71f39.png"
              alt="ceuma-logo"
            />
          </a>
        </div>
        <div class="texto">
          <h2 class="info">CEUMA</h2>
          <p class="info">
            Nossa qualidade se traduz na competência dos professores e no modelo
            pedagógico conduzido pelo saber científico e pela inovação de
            recursos e tecnologias.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="instituicao">
          <a
            href="https://www.famaz.edu.br/hotsite/"
            alt="Portal Unifamaz"
            target="_blank"
          >
            <img
              src="http://www.famaz.edu.br/assets/images/famaz_header.png"
              alt="famaz-logo"
            />
          </a>
        </div>
        <div class="texto">
          <h2 class="info">UNIFAMAZ</h2>
          <p class="info">
            Nossa qualidade se traduz na competência dos professores e no modelo
            pedagógico conduzido pelo saber científico e pela inovação de
            recursos e tecnologias.
          </p>
        </div>
      </div>

      <div class="break">
        <div class="card">
          <div class="instituicao">
            <a
              href="https://www.cesup.edu.br/hotsite-cesup/"
              alt="Portal Ceupi"
              target="_blank"
            >
              <img
                src="https://www.extranet.ceuma.br/assets/images/grupo-ceuma/cesup.png"
                alt="cesupi-logo"
              />
            </a>
          </div>
          <div class="texto">
            <h2 class="info">CESUPI</h2>
            <p class="info">
              Nossa qualidade se traduz na competência dos professores e no
              modelo pedagógico conduzido pelo saber científico e pela inovação
              de recursos e tecnologias.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="instituicao">
            <a
              href="https://www.ceupi.edu.br/hotsite-ceupi/"
              alt="portal Ceupi"
              target="_blank"
            >
              <img
                src="https://www.unieuro.edu.br/assets/images/grupo-ceuma/ceupi.png"
                alt="ceupi-logo"
              />
            </a>
          </div>
          <div class="texto">
            <h2 class="info">CEUPI</h2>
            <p class="info">
              Nossa qualidade se traduz na competência dos professores e no
              modelo pedagógico conduzido pelo saber científico e pela inovação
              de recursos e tecnologias.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="instituicao">
            <a
              href="https://www.unieuro.edu.br/hotsite/"
              alt="portal Unieuro"
              target="_blank"
            >
              <img
                src="https://www.unieuro.edu.br/assets/images/grupo-ceuma/unieuro.png"
                alt="Unieuro-logo"
              />
            </a>
          </div>
          <div class="texto">
            <h2 class="info">UNIEURO</h2>
            <p class="info">
              Nossa qualidade se traduz na competência dos professores e no
              modelo pedagógico conduzido pelo saber científico e pela inovação
              de recursos e tecnologias.
            </p>
          </div>
        </div>
      </div>
    </div>
  </StyledDiv>
);

export { CardGroupCeuma };
