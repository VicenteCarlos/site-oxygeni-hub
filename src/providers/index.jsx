import { MenuProvider } from "./MenuProvider";
import { DiscoverPageProvider } from "./DiscoverPageProvider";
import { ModalProvider } from "./ModalProvider";

const Provider = ({ children }) => (
  <MenuProvider>
    <DiscoverPageProvider>
      <ModalProvider>{children}</ModalProvider>
    </DiscoverPageProvider>
  </MenuProvider>
);

export { Provider };
