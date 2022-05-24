import { Header, Footer, Menu, Modal } from "./components/";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import { useMenu } from "./providers/MenuProvider";
import { AnimatePresence } from "framer-motion";
import { useModal } from "./providers/ModalProvider";
import { useDiscoverPage } from "./providers/DiscoverPageProvider"

export const App = () => {
  const { menuIsOpen } = useMenu();
  const { modalIsOpen } = useModal();
  const { page } = useDiscoverPage()

  return (
    <>
      <GlobalStyle />
      {menuIsOpen ? (
        <Menu />
      ) : (
        <AnimatePresence>
          <Header />
          <Rotas />
          <Footer page={page}/>
        </AnimatePresence>
      )}
      {modalIsOpen && <Modal />}
    </>
  );
};
