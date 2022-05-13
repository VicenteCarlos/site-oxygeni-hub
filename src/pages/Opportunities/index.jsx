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
              <figcaption id="nameBackGroundColorJS" >JavaScript</figcaption>
            </figure>
          </section>

          <section>
            <figure>
             <DiJavascript className="html5" />
              <figcaption id="nameBackGroundColorHTML">HTML5</figcaption>
            </figure>
          </section>
          
          <section>
            <figure>
               <DiCss3 className="css3" />
              <figcaption id="nameBackGroundColorCSS">CSS3</figcaption>
            </figure>
          </section>

          <section>
            <figure>
              <DiPython className="python3" />
              <figcaption id="nameBackGroundColorPython">Python</figcaption>
            </figure>
          </section>

          <section>
            <figure>
              <DiReact className="react" />
              <figcaption id="nameBackGroundColorReact" >React</figcaption>
            </figure>
          </section>


          <section>
            <figure>
              <DiAngularSimple className="angular" />
              <figcaption id="nameBackGroundColorAngular">Angular</figcaption>
            </figure>
          </section>


          <section>
            <figure>
              <DiMysql className="mysql" />
              <figcaption id="nameBackGroundColorMySql">MySql</figcaption>
            </figure>
          </section>

          <section>
            <figure>
              <DiJava className="java" />
              <figcaption id="nameBackGroundColorJava">Java</figcaption>
            </figure>
          </section>
        </div>
      </section>
      <section className="s-2">
        {/* <img src="https://cdn.discordapp.com/attachments/651404729766772763/966420361044430928/img.png" alt="espaços" /> */}
        <p>
          {/* Visitas estratégicas, articulações e palestras sobre ecossistema de
          inovação, conduzido pelo squad de Inovação */}
          Maecenas non molestie libero. Nunc in augue a risus pretium bibendum quis in lorem. Morbi sodales vehicula posuere. Nunc suscipit tellus justo, sed porttitor nulla ultrices id. Vivamus ut lacus sed nisi auctor lacinia. Vestibulum vehicula venenatis vestibulum. Aliquam erat volutpat. Ut bibendum nibh sed ipsum congue, ut convallis nisi maximus. Sed condimentum velit consectetur aliquam egestas. Duis gravida tellus vel libero vestibulum, non rhoncus sapien pretium. Fusce pretium mi orci, sed tempus est maximus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut dolor semper, tincidunt magna id, porttitor felis. Maecenas eget commodo magna. Ut ultricies massa nulla, nec vestibulum odio porta at. 
        </p>
      </section>
    </div>
  </StyledMain>
);
