import {useState, createContext, useContext} from "react"

const MenuContext = createContext()

const MenuProvider = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleClickMenu = () => setMenuIsOpen(!menuIsOpen)
    
    return (
        <MenuContext.Provider value={{ menuIsOpen, handleClickMenu }}>
            {children}
        </MenuContext.Provider>
    )
}

const useMenu = () => useContext(MenuContext)

export { MenuProvider, useMenu }