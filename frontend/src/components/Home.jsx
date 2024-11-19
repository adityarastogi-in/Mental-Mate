// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1>"Your 24/7 Safe Space for Every Thought and Emotion"</h1>
        <p>
            Mental Mate is designed as a compassionate, always-available support system that provides a non-judgmental, confidential space for users to share their thoughts and emotions. Its goal is to offer accessible mental health support for those who may lack immediate resources, empowering users to navigate their emotional journey with resilience and self-understanding.
        </p>
        {/* <button className="chat-btn">
            Get Started 
        </button> */}
      </div>
      <div className="home-right">
        <img src="../data/home-img.webp" alt="Home Image" />
      </div>
      
    </section>
  );
}

export default Home;
