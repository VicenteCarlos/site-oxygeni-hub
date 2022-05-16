import { Header, Footer, Menu } from "./components/";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import { useMenu } from "./providers/MenuProvider";
import { AnimatePresence } from "framer-motion";
import { useModal } from "./providers/ModalProvider";

export const App = () => {
  const { menuIsOpen } = useMenu();
  const {modalIsOpen, setModalIsOpen} = useModal() 

  return (
    <>
      <GlobalStyle />
      {menuIsOpen ? (
        <Menu />
      ) : (
        <AnimatePresence>
          <Header />
          <Rotas />
          <Footer />
        </AnimatePresence>
      )}
    </>
  );
};
