import { createContext, useState } from 'react'

export const PeriodicTableContext = createContext()

const PeriodicTableContextProvider = (props) => {
    const [contextData, setContextData] = useState([])

    const updateContextData = (newData) => {    
        setContextData(newData)
    }

    return ( 
        <PeriodicTableContext.Provider value={{contextData, updateContextData}}>
            {props.children}
        </PeriodicTableContext.Provider>
    )
}

export default PeriodicTableContextProvider