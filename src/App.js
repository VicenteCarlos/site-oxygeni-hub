import { Header } from "./components/Header";
import { Rotas } from "./routes";
import { GlobalStyle } from "./style";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Rotas />
    </>
  );
};
