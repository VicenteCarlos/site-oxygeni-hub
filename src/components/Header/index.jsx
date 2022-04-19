import { StyledHeader } from "./style";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <StyledHeader>
      <img
        className="logo"
        src="https://i.ibb.co/D7WS7YN/header-Oxygeni.png"
        alt="OxygeniLogo"
      />
      <nav className="navegacao">
        <ul>
          <motion.li
            whileHover={{ scale: 1.4, originX: 0.4, originY: 0.8 }}
            className="item"
            href="#"
          >
            <a href="#" target="_blank">
              Home
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.4, originX: 0.4, originY: 0.8 }}
            className="item"
            href="#"
          >
            <a href="#" target="_blank">
              Sobre Nós
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.4, originX: 0.4, originY: 0.8 }}
            className="item"
            href="#"
          >
            <a href="#" target="_blank">
              Faça parte
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.4, originX: 0.4, originY: 0.8 }}
            className="item"
            href="#"
          >
            <a href="#" target="_blank">
              Eventos
            </a>
          </motion.li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
