import React, { useState } from 'react';

const InputBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleTextareaResize = (event) => {
    // Reset the height to auto to shrink if the user deletes content
    event.target.style.height = 'auto';
    // Set the height to the scrollHeight, but limit it to a max height
    const maxHeight = 200; // Define a max height for the textarea
    const newHeight = Math.min(event.target.scrollHeight, maxHeight); // Prevent it from growing indefinitely
    event.target.style.height = `${newHeight}px`;
  };

  return (
    <div className="w-[48%] bg-gray-900 p-5 mb-4 rounded-xl">
      <textarea
        value={value}
        onChange={handleChange}
        onInput={handleTextareaResize}
        placeholder="Enter Text"
        className="w-[42.97vw] xl:w-[92%] md:w-[85%] sm:w-[80%] bg-gray-900 text-white focus:outline-none resize-none"
        style={{
          minHeight: '40px',
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      />
      <button
        className="h-9 ml-4 bg-slate-600 hover:bg-slate-500 text-white py-1 px-2 rounded-xl"
      >
        ▲
      </button>
    </div>
  );
};

export default InputBox;