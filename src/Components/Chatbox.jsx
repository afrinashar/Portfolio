import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import ChatBot from "react-chatbotify";
import './Chatbox.css';  // Import the styles

const Chatbox = ({ onOptionClick }) => {
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(true);

  const handleOptionClick = (option) => {
    if (option === 'Projects') {
      const newMessages = [...messages, { from: 'user', text: option }];
      setMessages([...newMessages, { from: 'bot', text: 'Here are some projects I have worked on: Project A, Project B, etc.' }]);
      setShowOptions(false);
    } else {
      onOptionClick(option);  // Handle navigation via parent
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {showOptions && (
        <div className="options">
          <button onClick={() => handleOptionClick('Projects')}>Projects</button>
          <button onClick={() => handleOptionClick('Experience')}>Experience</button>
          <button onClick={() => handleOptionClick('Email')}>Email</button>
          <button onClick={() => handleOptionClick('Call')}>Call</button>
        </div>
      )}
    </div>
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
    <div className="chatbox-container">
      <ChatBot settings={settings} flow={flow} />
    </div>
  );
};

export default MyChatBot;
