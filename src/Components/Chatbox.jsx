import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from "react-chatbotify";
import './Chatbox.css';

const Chatbox = ({ onOptionClick }) => {
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(true);

  const handleOptionClick = (option) => {
    if (option === 'Projects') {
      const newMessages = [...messages, { from: 'user', text: option }];
      setMessages([...newMessages, { from: 'bot', text: 'Here are some projects I have worked on: Project A, Project B, etc.' }]);
      setShowOptions(false);
    } else {
      onOptionClick(option);
    }
  };

  return (
    <section className="chatbox" aria-label="Chatbot">
      <div className="messages" aria-live="polite">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      {showOptions && (
        <nav className="options" aria-label="Chatbot Options">
          <button onClick={() => handleOptionClick('Projects')} aria-label="Show Projects">Projects</button>
          <button onClick={() => handleOptionClick('Experience')} aria-label="Show Experience">Experience</button>
          <button onClick={() => handleOptionClick('Email')} aria-label="Show Email">Email</button>
          <button onClick={() => handleOptionClick('Call')} aria-label="Show Call">Call</button>
        </nav>
      )}
    </section>
  );
};

const MyChatBot = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === 'Experience') {
      navigate('/experience');
    } else if (option === 'Email') {
      navigate('/email');
    } else if (option === 'Call') {
      navigate('/call');
    }
  };

  const settings = {
    general: { embedded: true },
    chatHistory: { storageKey: 'playground' },
    botBubble: { simStream: true },
  };

  const flow = {
    start: {
      message: 'Welcome to the playground 🥳! Choose an option:',
      path: 'chatbox',
    },
    chatbox: {
      component: () => <Chatbox onOptionClick={handleOptionClick} />,
      path: 'end_loop',
    },
    end_loop: {
      message: (params) => `Received: ${params.userInput}`,
      path: 'end_loop',
    },
  };

  return (
    <main className="chatbox-container" aria-label="Chatbot Container">
      <ChatBot settings={settings} flow={flow} />
    </main>
  );
};

export default MyChatBot;
