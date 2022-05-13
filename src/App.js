import { Header } from "./components/Header";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";
import { Footer } from "./components/Footer";

export const App = () => (
  <>
     <GlobalStyle />
    <Header /> 
    <Rotas />
    <Footer /> 
  </>
);
