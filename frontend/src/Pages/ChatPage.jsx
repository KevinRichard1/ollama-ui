import React, { useState, useEffect } from 'react';
import ChatWindow from '../Components/ChatWindow.jsx';
import InputBox from '../Components/InputBox.jsx';

// Dynamic Spinner Component
const LoadingSpinner = () => {
  const [spinner, setSpinner] = useState('/');

  useEffect(() => {
    const spinnerFrames = ['/', '-', '\\', '|'];
    let frameIndex = 0;

    const interval = setInterval(() => {
      frameIndex = (frameIndex + 1) % spinnerFrames.length;
      setSpinner(spinnerFrames[frameIndex]);
    }, 200);  // Update spinner every 200ms

    return () => clearInterval(interval);  // Clean up interval on component unmount
  }, []);

  return <span>{spinner}</span>;
};

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! How can I assist you?' },
  ]);
  const [loading, setLoading] = useState(false);  // To track loading state

  async function handleSendMessage(userMessage) {
    try {
      // Add user message to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: userMessage },
      ]);

      // Add temporary loading message from bot with dynamic spinner
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'bot', content: <LoadingSpinner /> },
      ]);

      setLoading(true);

      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        // Replace the loading spinner with the bot's actual response
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages];
          newMessages[newMessages.length - 1] = { role: 'bot', content: data.message || data.content };
          return newMessages;
        });
      } else {
        console.error('Server error:', data.error);
      }

    } catch (error) {
      console.error('Request error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full items-center justify-center bg-[#fff9eb] dark:bg-gray-800">
      <ChatWindow messages={messages} />
      {loading && <LoadingSpinner />}
      
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;