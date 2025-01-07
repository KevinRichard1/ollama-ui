import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import ChatPage from './Pages/ChatPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleToggleDarkMode = (newMode) => {
    setDarkMode(newMode);
    localStorage.setItem('displayMode', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('displayMode') || 'light';
    setDarkMode(savedMode === 'dark');
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative flex h-screen">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={handleToggleSidebar}
        darkModeActivated={darkMode}
      />
      <div className="flex-grow flex flex-col">
        <Header
          onToggleSidebar={handleToggleSidebar}
          darkModeActivated={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />
        <ChatPage darkModeActivated={darkMode} />
      </div>
    </div>
  );
}

export default App;