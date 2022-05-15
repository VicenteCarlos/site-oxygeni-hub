import { MenuProvider } from "./MenuProvider"

const Provider = ({children}) => (
    <MenuProvider>
        {children}
    </MenuProvider>
)

export { Provider }