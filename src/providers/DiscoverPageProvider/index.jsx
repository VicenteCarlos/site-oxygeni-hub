import {createContext, useContext, useState} from "react"

const DiscoverPageContext = createContext()

const DiscoverPageProvider = ({ children }) => {
    const [page, setPage] = useState("")

    return (
        <DiscoverPageContext.Provider value={{ page, setPage }}> 
            {children}
        </DiscoverPageContext.Provider>
    )
}

const useDiscoverPage = () => useContext(DiscoverPageContext)

export { DiscoverPageProvider, useDiscoverPage }