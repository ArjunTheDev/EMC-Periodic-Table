import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PeriodicTableContextProvider from './service/ContextService'

ReactDOM.createRoot(document.getElementById('root')).render(
    <PeriodicTableContextProvider>
        <App />
    </PeriodicTableContextProvider>
)
