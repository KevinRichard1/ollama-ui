import React, { useState } from 'react';

const InputBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message.trim() === '') return;

    onSendMessage(message);
    setMessage(''); 
  };

  const handleTextareaResize = (event) => {
    event.target.style.height = 'auto';
    const maxHeight = 200;
    const newHeight = Math.min(event.target.scrollHeight, maxHeight);
    event.target.style.height = `${newHeight}px`;
  };

  return (
    <div className="w-[48%] bg-[#b3b1a5] dark:bg-gray-900 p-5 mb-4 rounded-xl">
      <textarea
        value={message}
        onChange={handleChange}
        onInput={handleTextareaResize}
        placeholder="Enter Text"
        className="w-[42.97vw] xl:w-[92%] md:w-[85%] sm:w-[80%] bg-[#b3b1a5] text-gray-900 placeholder:text-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none resize-none"
        style={{
          minHeight: '40px',
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      />
      <button
        className="h-9 ml-8 bg-[#7d7d74] text-[#fff9eb] hover:bg-[#5b5b54] dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white py-1 px-2 rounded-xl"
        onClick={handleSendMessage}
      >
        ▲
      </button>
    </div>
  );
};

export default InputBox;
