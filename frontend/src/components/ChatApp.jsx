// src/components/ChatApp.js
import React, { useState } from 'react';
import axios from 'axios';
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';
import '../styles/ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am Mental Mate, your mental health companion. How can I assist you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle sending message
  const handleSend = async (inputMessage) => {
    if (!inputMessage.trim()) return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setIsLoading(true);

    const apiURL = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${apiURL}/api/chat`, { message: inputMessage });

      const botMessage = { sender: 'bot', text: response.data.botMessage };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        sender: 'bot',
        text: 'Sorry, something went wrong. Please try again later.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setIsLoading(false);
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">
        <img src="../icons/logo.png" className="logo" alt=" " />
          <img src="../icons/title-logo.png" className="header-title" alt="Mental Mate" />
        </div>
        <ChatBox messages={messages} />
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatApp;
