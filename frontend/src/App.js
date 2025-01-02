import ChatPage from './Pages/ChatPage'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className='items-center'>
      <Header/>
      <Sidebar/>
      <ChatPage/>
    </div>
  );
}

export default App;
