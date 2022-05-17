import { Form } from "../../components";
import { StyledMain, SectionInfos } from "./style"
import { ThemeProvider } from "styled-components";

const Bepartofit = () => (
  <StyledMain>
   
    <SectionInfos>
    <div className="box">
      <div className = "informacoes">
        <div className="texto">
        <h2>Faça Parte</h2>
        <p>
          Você que tem espiríto jovem, é talentoso(a) e dedicado(a) ao que faz,
          adora inovação e tecnologia, além de estar pronto(a) para novos
          desafios, cadastre-se! Você pode ser o(a) próximo(a) a trabalhar
          conosco!
        </p>
        </div>
        <div>
          <Form />
        </div>  
      </div> 
    <div className="fotos">
      <div>
        <img src="https://cdn.discordapp.com/attachments/950154806616543280/975903323293097984/Design_sem_nome_2.png" alt="fotosquad" className="imgSquad" />
        <img src="https://cdn.discordapp.com/attachments/651404729766772763/975910076864938004/262812962_126765403131485_4637346033576202508_n.jpg" alt="foto" className="imgSquad" />
      </div>    
      <img src="https://cdn.discordapp.com/attachments/651404729766772763/975910919689359390/275941946_299139765572576_2619428970676826134_n.jpg" alt="foto" className="imgsquad" />
  </div>  
  
    </div>
    </SectionInfos>
    
    
  </StyledMain>
);

export { Bepartofit };
