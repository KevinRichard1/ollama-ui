import React from 'react';

const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <div
      className={`fixed top-[-6px] left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center p-4">
        <button onClick={onToggleSidebar} className="bg-gray-700 p-2 rounded hover:bg-gray-600 mr-2">☰</button>
        <h2 className="text-xl font-bold">Chat List</h2>
      </div>
      <ul>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Chat 1</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Chat 2</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Chat 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;