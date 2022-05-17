import { StyledHeader } from "./style";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import {btVariant} from "./variants"
import {useMenu} from "../../providers/MenuProvider"
import { useModal } from "../../providers/ModalProvider";

const Li = [
  { text: "Home", route: "/" },
  { text: "Sobre Nós", route: "/aboutus" },
  { text: "Faça parte", route: "/bepartofit" },
  { text: "Eventos", route: "/events" },
  { text: "Oportunidades", route: "/opportunities" },
];

const Header = () => {
  
  const {handleClickMenu} = useMenu()
  const {modalIsOpen} = useModal()

  return (
    <StyledHeader modalIsOpen={modalIsOpen}>
      <motion.img
        className="logo"
        src="https://cdn.discordapp.com/attachments/691321430586949762/974717805859577906/unknown.png"
        alt="OxygeniLogo"
        initial={{x: -100}}
        animate={{x: 0}}
        transition={{type: "spring", stiffness: 30}}
      />
      <motion.button
          variants={btVariant}
          onClick={handleClickMenu}
          initial="initial"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.2 }}
        >
        <AiOutlineMenu />
      </motion.button>
      <nav className="navegacao">
        <ul>
          {Li.map((li, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.4, originX: 0.4, originY: 0.8 }}
              className="item"
              href="#"
            >
              <Link to={`${li.route}`}>{li.text}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  )
};

export { Header }