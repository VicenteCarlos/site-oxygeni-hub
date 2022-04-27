import { StyledHeader } from "./style";
import { motion } from "framer-motion";
import { Li } from "../../assets/js/mocks";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <img
        className="logo"
        src="https://cdn.discordapp.com/attachments/691321430586949762/966129618929188894/logoOxygeni.png"
        alt="OxygeniLogo"
      />
      <nav className="navegacao">
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
      </nav>
    </StyledHeader>
  );
};
