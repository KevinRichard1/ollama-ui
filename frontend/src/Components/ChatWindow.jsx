import React from 'react';

const ChatWindow = ({ messages }) => {
  console.log('Messages:', messages); // Debugging

  return (
    <div className="flex-grow overflow-y-auto p-4">
      {messages.length === 0 && <p className="text-center text-gray-500">No messages yet. Start chatting!</p>}
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`p-3 rounded-lg min-w-[30px] max-w-xl ${
              message.role === 'user'
                ? 'bg-gray-300 text-black'
                : 'bg-gray-500 text-white'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;