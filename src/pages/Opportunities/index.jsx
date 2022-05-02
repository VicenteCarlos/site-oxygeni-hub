import { StyledMain } from "./style";
import { DiJsBadge, DiJavascript, DiCss3, DiPython, DiReact, DiAngularSimple, DiMysql, DiJava } from "react-icons/di";
import {motion} from "framer-motion"


export const Opportunities = () => (
  <StyledMain as={motion.main} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
     <div className="container">
        <h2>Construa as suas habilidades de desenvolvedor</h2>
        <section className="s-1">
          <img src="https://cdn.discordapp.com/attachments/651404729766772763/966410443159650444/Wavy_Bus-15_Single-01.jpg" alt="illustration" />
          <div className="icons">
            <section>
                <DiJsBadge className="js"/>
                <p class="FontSizeP">JavaScript</p>
            </section>
            <section>
               <DiJavascript className="html5"/>
               <p class="FontSizeP">HTML 5</p>
            </section>
           <section> 
               <DiCss3 className="css3" />
               <p class="FontSizeP">CSS3</p>  
           </section>
           <section> 
              <DiPython className="python3" />
              <p class="FontSizeP"> Python 3</p>
           </section>
           <section>
              <DiReact className="react" />
              <p class="FontSizeP">React</p>
          </section>
          <section>                
            <DiAngularSimple className="angular" />
            <p class="FontSizeP"> Angular</p>
         </section>
         <section>   
            <DiMysql className="mysql"/>
            <p class="FontSizeP">MySql</p>
        </section>
         <section>     
            <DiJava className="java" />
            <p class="FontSizeP">Java</p>
        </section>  
          </div>
        </section>
        <section className="s-2">
          <img src="https://cdn.discordapp.com/attachments/651404729766772763/966420361044430928/img.png" alt="espaços" />
          <p>Visitas estratégicas, articulações e palestras sobre ecossistema de inovação, conduzido pelo Squade de Inovação</p>
        </section>
     </div>
  </StyledMain>
);


