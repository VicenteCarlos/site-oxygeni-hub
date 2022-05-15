import { Header, Footer, Menu } from "./components/";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import { useMenu } from "./providers/MenuProvider";

export const App = () => {
  const { menuIsOpen } = useMenu();

  return (
    <>
      <GlobalStyle />
      {menuIsOpen ? (
        <Menu />
      ) : (
        <>
          <Header />
          <Rotas />
          <Footer />
        </>
      )}
    </>
  );
};
