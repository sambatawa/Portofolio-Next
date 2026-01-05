'use client'
import React, { useState } from 'react';
import { FaComments, FaTimes} from 'react-icons/fa';
import Chatbot from './Chatbot';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 h-auto w-120 max-w-[90vw] animate-slideUp">
          <div className="relative">
            <button onClick={toggleChat} className="absolute -top-10 left-0 bg-black/60 backdrop-brightness-150 text-white p-3 rounded-full shadow-lg hover:scale-102 transition-transform duration-200">
              <FaTimes className="text-sm" />
            </button>
            <div className="bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-[#4ba293]/20 border border-[#4ba293]/20">
              <Chatbot />
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button onClick={toggleChat} className="bg-gradient-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-[#4ba293]/30 group">
          <div className="relative">
            <FaComments className="text-xl" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#4ba293] animate-pulse"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default FloatingChatbot;
