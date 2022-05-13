import { createContext } from "react";
import { DiscoverPageProvider } from "./DiscoverPageProvider";

const ProviderContext = createContext();

const Provider = ({ children }) => (
  <ProviderContext.Provider>
    <DiscoverPageProvider>{children}</DiscoverPageProvider>
  </ProviderContext.Provider>
);

export { Provider };
