import { Header, Footer } from "./components/";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <Rotas />
      <Footer />
    </>
  );
};
