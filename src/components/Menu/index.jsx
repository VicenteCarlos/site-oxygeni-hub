import { StyledMain, StyledHeader } from "./style";
import { motion } from "framer-motion";
import { useMenu } from "../../providers/MenuProvider";
import { IoLogoInstagram } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { li } from "../../assets/js/mocks";

const Menu = () => {
  const { handleClickMenu } = useMenu();

  return (
    <>
      <StyledHeader
        as={motion.header}
        initial={{y: "100vh"}}
        animate={{y: 0}}
        transition={{type: "tween", stiffness: 50, duration: 0.7}}
        exit={{y: -100, transition: {ease: "easeInOut"}}}
      >
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
      <StyledMain
        as={motion.main}
        initial={{y: "100vh"}}
        animate={{y: 0}}
        transition={{type: "tween", stiffness: 50, duration: 0.7}}
        exit={{y: -100, transition: {ease: "easeInOut"}}}
      >
        <nav className="nav-1">
          <ul>
            {Object.entries(li).map((item) => (
              <li>
                <Link to={item[0]}>
                  <button onClick={handleClickMenu}>{item[1]}</button>
                </Link>
              </li>
            ))}
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
