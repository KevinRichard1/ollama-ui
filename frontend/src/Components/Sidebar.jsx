import React from 'react';

const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <div
      className={`fixed top-[-6px] left-0 h-full w-64 bg-[#b3b1a5] text-gray-800 dark:bg-gray-900 dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center p-4 bg-[#b3b1a5] text-black dark:bg-gray-900 dark:text-white transition-all">
        <button onClick={onToggleSidebar} className="bg-[#7d7d74] dark:bg-gray-700 p-2 rounded hover:bg-[#5b5b54] hover:text-[#fbffeb] dark:hover:bg-gray-600 mr-2">☰</button>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white transition-all">Chat List</h2>
      </div>
      <ul>
        <li className="p-4 hover:bg-[#5b5b54] hover:text-[#fbffeb] dark:hover:bg-gray-700 cursor-pointer transition-all">Chat 1</li>
        <li className="p-4 hover:bg-[#5b5b54] hover:text-[#fbffeb] dark:hover:bg-gray-700 cursor-pointer transition-all">Chat 2</li>
        <li className="p-4 hover:bg-[#5b5b54] hover:text-[#fbffeb] dark:hover:bg-gray-700 cursor-pointer transition-all">Chat 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;