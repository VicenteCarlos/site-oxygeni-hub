import { Header, Footer, Menu } from "./components/";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import { useMenu } from "./providers/MenuProvider";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const { menuIsOpen } = useMenu();

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
