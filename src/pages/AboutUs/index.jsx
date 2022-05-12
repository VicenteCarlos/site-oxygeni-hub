import { StyledMain } from "./style";
import { motion } from "framer-motion";
import {SquadCard} from "./../../components"
import { Components } from "./../../assets/js/mocks";
import { Agent } from "../../components/Agents";
import {Ambassador} from "./../../components"
import { Esponsor } from "../../components/Esponsors";

const AboutUs = () => (
    <StyledMain as={motion.main} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
        <div className="div1"><section class="container1">    
          <div class = "conteudo">
            <h1 class = "titulo">O que é um HUB?</h1>
            <p class = "texto">São ambientes com fácil acesso à mão de obra qualificada e que contam com a presença de entidades apoiadoras como aceleradoras e incubadoras</p>
          </div>
          <img class = "imgmain" alt = "imgmain" src="https://img.freepik.com/vetores-gratis/pessoas-minusculas-testando-a-garantia-de-qualidade-em-ilustracao-vetorial-plana-de-software-isolado-personagem-de-desenho-animado-corrigindo-bugs-no-dispositivo-de-hardware-teste-de-aplicativo-e-conceito-de-servico-de-ti_74855-10172.jpg?t=st=1650424195~exp=1650424795~hmac=d6f879b3f1f9ea6f013256c32123c3469760732dfdcbb08101dccfb9745e9910&w=996"/>
        </section></div>
        <section class="container2">
            <h3>Squad de Inovação</h3>
            <div>
            {Components.squad_inovacao.map((item, i) => (
              <SquadCard key={i} item={item} />
            ))}
          </div>  
        </section>
        <section class="container2">
            <h3>Agentes</h3>
            <div>
            {Components.agentes.map((item, i) => (
              <Agent key={i} item={item} />
            ))}
          </div>  
        </section>
        <section class="container2">
            <h3>Embaixadores</h3>
            <div>
            {Components.embaixadores.map((item, i) => (
              <Ambassador key={i} item={item} />
            ))}
          </div>  
        </section>
        <section class="container2">
            <h3>Apoio</h3>
            <div>
            {Components.apoio.map((item, i) => (
              <Esponsor key={i} item={item} />
            ))}
          </div>  
        </section>
        <section class="container3">
            <div class = "conteudo3">
                <h2 class = "titulo">Ecossistema de Inovação</h2>
            </div>
            <img class = "imgeco" src="https://cdn.discordapp.com/attachments/691321430586949762/966393115101507595/ecossistema.PNG
" alt ="Ecossistema do Hub"/>
        </section>
        <section class="container4">
        <img class="imguni" src ="https://cdn.discordapp.com/attachments/691321430586949762/966393075905732688/uni.PNG
" alt = "Grupo Ceuma" />
            <div class ="conteudo4">   
                <h2 class = "titulo">Grupo CEUMA</h2>
                {/* <p class = "texto">sediadas em quatro capitais e mais duas cidades de três regiões brasileiras. Essa estrutura física e pedagógica foi concebida para impulsionar e padronizar a gestão do Grupo com o foco de investir na educação superior de excelência no Brasil. Um dos desafios é transformar, definitivamente, a realidade social das regiões geográficas carentes de profissionais preparados em escala suficiente para suprir as demandas da população.</p> */}
            </div>    
        </section>   
    </StyledMain> 
);

export { AboutUs }
