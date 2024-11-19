// src/App.js
import React, { useState } from 'react';
import ChatApp from './components/ChatApp';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import './App.css';
import './styles/ChatApp.css'


function App() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  // Toggle visibility function
  const toggleChat = () => {
    setIsChatVisible((prev) => !prev);
  };

  return (
    <div className="app">
      <Header />                                                                                  {/*Header and Navigation tab */}

      <div className={`main-content ${isChatVisible ? 'blur' : ''}`}>                             {/*Mian body */}
        <Home />
        <About />
        <Footer />
      </div>  

      <button className="toggle-chat-btn" onClick={toggleChat}>                                   {/*Toggle button */}
        {isChatVisible ? <img src="../icons/CloseChat.png" alt="Close Chat" /> : <img src="../icons/OpenChat.png" alt="Open Chat" />}
      </button>
      
      <div className={`chat-container animation ${isChatVisible ? 'show' : 'hide'}`}>             {/*Chat App*/}
        <ChatApp />
      </div>
    </div>
  );
}

export default App;
