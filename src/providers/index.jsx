import { MenuProvider } from "./MenuProvider";
import { DiscoverPageProvider } from "./DiscoverPageProvider";

const Provider = ({ children }) => (
  <MenuProvider>
    <DiscoverPageProvider>{children}</DiscoverPageProvider>
  </MenuProvider>
);

export { Provider };
