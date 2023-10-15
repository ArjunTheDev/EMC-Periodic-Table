import { Route, Routes, BrowserRouter } from "react-router-dom"
import PeriodicTable from "./components/PeriodicTable"
import ElementOverview from "./components/ElementOverview"
import Footer from "./components/Footer"
import PeriodicTableContextProvider from "./service/ContextService"

function App() {

  return (
    <>
      <h5 className="uppercase text-center text-5xl mt-10 text-[#000000] font-mono">Periodic Table of the Elements</h5>
        <BrowserRouter>
          <PeriodicTableContextProvider>
            <Routes>
              <Route path="/" element={<PeriodicTable />} />
              <Route path="overview/:id" element={<ElementOverview />} />
            </Routes>
          </PeriodicTableContextProvider>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
