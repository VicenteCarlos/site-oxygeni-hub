import { StyledHeader } from "./style";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { Li } from "../../js";
import { Link } from "react-router-dom";
import {btVariant} from "./variants"

const Header = () => (
  <StyledHeader>
    {/* <img
      className="logo"
      src="https://cdn.discordapp.com/attachments/691321430586949762/966129618929188894/logoOxygeni.png"
      alt="OxygeniLogo"
    /> */}
    <motion.button
        variants={btVariant}
        initial="initial"
        animate="visible"
        exit="exit"
        whileHover={{ scale: 1.2 }}
      >
      <AiOutlineMenu />
    </motion.button>
    {/* <nav className="navegacao">
      <ul>
        {Li.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.4, originX: 0.4, originY: 0.8 }}
            className="item"
            href="#"
          >
            <Link to={`/${item.route}`}>{item.text}</Link>
          </motion.li>
        ))}
      </ul>
    </nav> */}
  </StyledHeader>
);

export { Header }