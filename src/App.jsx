import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PeriodicTable from './components/PeriodicTable'
import ElementOverview from './components/ElementOverview'
import Footer from './components/Footer'
import FavoritesPopup from './components/FavoritesPopup'

function App() {

  return (
    <>
      <div className='flex justify-center items-center mt-10 p-2'>
        <h5 className='uppercase text-center text-5xl text-[#000000] font-mono grow'>Periodic Table of the Elements</h5>
          <FavoritesPopup className='flex-none w-28' />
      </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PeriodicTable />} />
            <Route path='overview/:id' element={<ElementOverview />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
