import React from 'react'
import ChatWindow from '../Components/ChatWindow.jsx'
import InputBox from '../Components/InputBox.jsx'

const ChatPage = () => {
  return (
    <div className='flex flex-col h-full items-center justify-center bg-gray-800'>
        <ChatWindow/>
        <InputBox/>
    </div>
  )
}

export default ChatPage