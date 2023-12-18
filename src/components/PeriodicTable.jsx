import React from 'react'
import PeriodicTableContent from '../assets/data/PeriodicTableJSON.json'
import { elementCategoryColorCombination } from '../assets/data/ColorCombination'
import { Link } from 'react-router-dom'

const PeriodicTable = () => {
  const rows = 7
  const columns = 18

  const getElement = (row, col) => {
    return PeriodicTableContent.elements.find((element) => element.ypos === row && element.xpos === col)
  }

  return (
    <div className='grid grid-cols-18 grid-rows-7 gap-2 p-4'>
      {Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: columns }, (_, colIndex) => {
          const element = getElement(rowIndex + 1, colIndex + 1)
          return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-13 h-13 p-2 border border-gray-400 flex items-center justify-center ${
                  element ? elementCategoryColorCombination[element?.category] + ' cursor-pointer' : 'bg-slate-100 cursor-not-allowed'
                }`}
              >
                {element && (
                  <Link to={`overview/${element?.number}`}>
                    <div className='text-xs'>{element.number}</div>
                    <div className='text-sm font-bold'>{element.symbol}</div>
                    <div className='text-xs'>{element.name}</div>
                  </Link>
                )}
              </div>
          )
        })
      )}
    </div>
  )

}

export default PeriodicTable
