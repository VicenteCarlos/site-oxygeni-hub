import { StyledMain, StyledHeader } from "./style";
import { motion } from "framer-motion";
import { useMenu } from "../../providers/MenuProvider";
import { IoLogoInstagram } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = () => {
  const { handleClickMenu } = useMenu();

  return (
    <>
      <StyledHeader>
        <img
          src="https://cdn.discordapp.com/attachments/691321430586949762/974717805859577906/unknown.png"
          alt="logoOxygeniHub"
        />
        <motion.button
          onClick={handleClickMenu}
          initial="initial"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.2 }}
        >
          X
        </motion.button>
      </StyledHeader>
      <StyledMain>
        <nav className="nav-1">
          <ul>
            <li>
              <Link to="/">
                <button onClick={handleClickMenu}>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <button onClick={handleClickMenu}>Sobre Nós</button>
              </Link>
            </li>
            <li>
              <Link to="/bepartofit">
                <button onClick={handleClickMenu}>Faça Parte</button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button onClick={handleClickMenu}>Eventos</button>
              </Link>
            </li>
            <li>
              <Link to="/opportunities">
                <button onClick={handleClickMenu}>Oportunidades</button>
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="nav-2">
          <a href="https://www.linkedin.com/company/oxygeni-hub/">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/oxygenihub/">
            <IoLogoInstagram />
          </a>
        </nav>
      </StyledMain>
    </>
  );
};

export { Menu };
