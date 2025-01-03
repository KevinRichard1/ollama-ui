import React from 'react';
import ChatPage from './Pages/ChatPage';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar} />
      <div className="flex-grow flex flex-col">
        <Header
          onToggleSidebar={handleToggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <ChatPage/>
      </div>
    </div>
  )
}

export default App;