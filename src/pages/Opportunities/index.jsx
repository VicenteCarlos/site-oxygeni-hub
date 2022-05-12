import { StyledMain } from "./style";
import {
  DiJsBadge,
  DiJavascript,
  DiCss3,
  DiPython,
  DiReact,
  DiAngularSimple,
  DiMysql,
  DiJava,
} from "react-icons/di";
import { motion } from "framer-motion";

export const Opportunities = () => (
  <StyledMain
    as={motion.main}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container">
      <h2>Construa as suas habilidades de desenvolvedor</h2>
      <section className="s-1">
        <img
          src="https://cdn.discordapp.com/attachments/651404729766772763/966410443159650444/Wavy_Bus-15_Single-01.jpg"
          alt="illustration"
        />
        <div className="icons">
          <section>
            <figure>
              <DiJsBadge className="js" />
              <figcaption className="nameBackGroundColorJS" >JavaScript</figcaption>
            </figure>
          </section>

          <section>
            <figure>
             <DiJavascript className="html5" />
              <figcaption className="nameBackGroundColorHTML">HTML5</figcaption>
            </figure>
          </section>
          
          <section>
            <figure>
               <DiCss3 className="css3" />
              <figcaption className="nameBackGroundColorCSS">CSS3</figcaption>
            </figure>
          </section>

          <section>
            <figure>
              <DiPython className="python3" />
              <figcaption className="nameBackGroundColorPython">Python</figcaption>
            </figure>
          </section>

          <section>
            <figure>
              <DiReact className="react" />
              <figcaption className="nameBackGroundColorReact" >React</figcaption>
            </figure>
          </section>


          <section>
            <figure>
              <DiAngularSimple className="angular" />
              <figcaption className="nameBackGroundColorAngular">Angular</figcaption>
            </figure>
          </section>


          <section>
            <figure>
              <DiMysql className="mysql" />
              <figcaption className="nameBackGroundColorMySql">MySql</figcaption>
            </figure>
          </section>

          <section>
            <figure>
              <DiJava className="java" />
              <figcaption className="nameBackGroundColorJava">Java</figcaption>
            </figure>
          </section>
        </div>
      </section>
      <section className="s-2">
        {/* <img src="https://cdn.discordapp.com/attachments/651404729766772763/966420361044430928/img.png" alt="espaços" /> */}
        <p>
          Visitas estratégicas, articulações e palestras sobre ecossistema de
          inovação, conduzido pelo squad de Inovação
        </p>
      </section>
    </div>
  </StyledMain>
);
