import React from 'react'

const ChatWindow = () => {
  const messages = [
    { role: 'ai', content: 'Hello! How can I assist you?' },
    { role: 'user', content: 'What can you do?' },
    { role: 'ai', content: 'I can help you with various tasks like coding and chatting.' },
  ];

  return (
    <div className="flex-grow overflow-y-auto p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-4 flex ${
            message.role === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`p-3 rounded-lg max-w-xs ${
              message.role === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatWindow