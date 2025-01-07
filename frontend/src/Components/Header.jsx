import React from 'react';
import sunIcon from '../Assets/sun-icon.png';
import moonIcon from '../Assets/moon-icon.png';

const Header = ({ onToggleSidebar, darkModeActivated, onToggleDarkMode }) => {
  const handleDarkModeToggle = () => {
    onToggleDarkMode(!darkModeActivated);
  };

  return (
    <div className="h-16 bg-[#b3b1a5] text-black flex items-center px-4 dark:bg-gray-900 dark:text-white transition-all">
      <button 
        onClick={onToggleSidebar}
        className="bg-[#7d7d74] dark:bg-gray-700 p-2 rounded hover:bg-[#5b5b54] hover:text-[#fbffeb] dark:hover:bg-gray-600 mr-2"
      >
        ☰
      </button>
      <img 
        src={darkModeActivated ? sunIcon : moonIcon} 
        alt="dark mode toggle" 
        className="h-[40px] ml-[90vw] cursor-pointer"  
        onClick={handleDarkModeToggle}
      />
    </div>
  );
};

export default Header;
