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
            className={`p-3 rounded-lg max-w-xl ${
              message.role === 'user'
                ? 'bg-[#7d7d74] text-gray-200 dark:bg-slate-900 dark:text-gray-300'
                : 'bg-[#b3aea5] text-gray-900 dark:bg-slate-500'
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