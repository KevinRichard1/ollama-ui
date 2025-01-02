import React from 'react'

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <div className="h-16 bg-gray-900 text-white flex items-center px-4">
      <button onClick={onToggleSidebar} className="mr-4 bg-gray-700 p-2 rounded hover:bg-gray-600"> {isSidebarOpen ? '⮜' : '☰'} </button>
    </div>
  )
}

export default Header