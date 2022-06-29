import React, {useContext, useState} from 'react'

const GlobalContext = React.createContext(null);

const ContextProvider = ({ children }) => {
    const [bookForm, setBookForm] = useState({ place: "", guests: 0, arrival: new Date(), departure: new Date() })

    return (
        <GlobalContext.Provider
            value={{
                bookForm,
                setBookForm
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
export const useSpotifyContext = () => {
    return useContext(GlobalContext)
}

export { GlobalContext, ContextProvider }