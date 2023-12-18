import React, { useState } from 'react'

const BookMarkIcon = ({updateFavorites, favorites, elementId}) => {

  const toggleCheckbox = () => {
    if (favorites.indexOf(elementId) === -1) {
      updateFavorites([...favorites, elementId])
    } else {
      updateFavorites(favorites.filter((item) => item !== elementId))
    }
  }

  return (
    <label className='flex items-center space-x-2 cursor-pointer'>
      <input
        type='checkbox'
        className='hidden'
        checked={favorites.includes(elementId)}
        onChange={toggleCheckbox}
      />
      <svg
        className={`h-8 w-8 ${favorites.includes(elementId) ? 'text-red-500' : 'text-gray-50'} fill-current`}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 4c-3.31 0-6 2.239-6 5.007 0 3.005 3.264 5.39 6 7.564 2.736-2.174 6-4.559 6-7.564C18 6.239 15.31 4 12 4z'
        />
      </svg>
      <span className='text-lg text-gray-700 mb-1'>{favorites.includes(elementId) ? 'Liked' : 'Like'}</span>
    </label>
  )
}

export default BookMarkIcon
