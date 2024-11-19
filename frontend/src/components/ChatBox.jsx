// src/components/ChatBox.js
import React from 'react';
import Message from './Message';
import '../styles/ChatBox.css';

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <Message key={index} sender={message.sender} text={message.text} />
      ))}
    </div>
  );
};

export default ChatBox;
