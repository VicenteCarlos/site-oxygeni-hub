import { Header } from "./components/Header";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import {Footer} from "./components/Footer"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Rotas />
      <Footer />
    </>
  );
};
