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
import { useDiscoverPage } from "../../providers/DiscoverPageProvider";

export const Opportunities = () => {
  const { setPage } = useDiscoverPage();

  setPage("opportunities");

  return (
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
              <figure id="js">
                <DiJsBadge className="js" />
                <button>
                  <figcaption id="nameBackGroundColorJS">JavaScript</figcaption>
                </button>
              </figure>
            </section>

            <section>
              <figure id="html5">
                <DiJavascript className="html5" />
                <button>
                  <figcaption id="nameBackGroundColorHTML">HTML5</figcaption>
                </button>
              </figure>
            </section>

            <section>
              <figure id="css3">
                <DiCss3 className="css3" />
                <button>
                  <figcaption id="nameBackGroundColorCSS">CSS3</figcaption>
                </button>
              </figure>
            </section>

            <section>
              <figure id="python3">
                <DiPython className="python3" />
                <button>
                  <figcaption id="nameBackGroundColorPython">Python</figcaption>
                </button>
              </figure>
            </section>

            <section>
              <figure id="react">
                <DiReact className="react" />
                <button>
                  <figcaption id="nameBackGroundColorReact">React</figcaption>
                </button>
              </figure>
            </section>

            <section>
              <figure id="angular">
                <DiAngularSimple className="angular" />
                <button>
                  <figcaption id="nameBackGroundColorAngular">
                    Angular
                  </figcaption>
                </button>
              </figure>
            </section>

            <section>
              <figure id="mysql">
                <DiMysql className="mysql" />
                <button>
                  <figcaption id="nameBackGroundColorMySql">MySql</figcaption>
                </button>
              </figure>
            </section>

            <section>
              <figure id="java">
                <DiJava className="java" />
                <button>
                  <figcaption id="nameBackGroundColorJava">Java</figcaption>
                </button>
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
};
