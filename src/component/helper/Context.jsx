'use client'
import { createContext, useState } from "react";

export const Context = createContext()


const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)


    const contextValues = {
        sidebar, setSidebar
    }

    return <Context.Provider value={contextValues}>
        {children}
    </Context.Provider>

}

export default ContextProvider