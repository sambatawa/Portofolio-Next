'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaPaperPlane } from 'react-icons/fa';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      sender: 'bot', 
      text: 'Hello! I\'m Sambatawa AI, your personal assistant. I can help you learn about my skills, projects, and how we can collaborate. What would you like to know?', 
      timestamp: new Date() 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from chat API');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Chatbot Error:', error);
      return 'Sorry, I encountered an error. Please try again later!';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const botResponse = await generateBotResponse(userMessage.text);
      
      const botMessage: Message = {
        id: messages.length + 2,
        sender: 'bot',
        text: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        sender: 'bot',
        text: 'Sorry, I encountered an error. Please try again later!',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="bg-gradient-glass rounded-t-2xl p-4 flex items-center gap-3 shadow-lg">
        <div className="relative">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
            <FaComments className="text-white text-lg" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#4ba293] animate-pulse"></div>
        </div>
        <div className="flex-1">
          <h4 className="text-white font-bold text-sm">Sambatawa AI</h4>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      <div className="bg-black/60 backdrop-blur-md rounded-b-2xl p-4 h-80 overflow-hidden flex flex-col border border-[#4ba293]/20 shadow-2xl shadow-[#4ba293]/10">
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2 custom-scrollbar">
          {messages.map((message, index) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex gap-2 max-w-[80%]">
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaComments className="text-white text-xs" />
                  </div>
                )}
                <div className={`px-4 py-2 rounded-2xl text-sm shadow-lg transition-all duration-300 ${
                    message.sender === 'user'
                      ? 'bg-gradient-primary text-white shadow-[#4ba293]/30'
                      : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                  }`}
                >
                  <div className="relative">
                    {message.text}
                    {message.sender === 'user' && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-fadeIn">
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaComments className="text-white text-xs" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-white border border-[#4ba293]/20 px-4 py-2 rounded-2xl text-sm shadow-lg">
                  <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 bg-[#4ba293] rounded-full animate-bounce" style={{ animationDelay: '0.05s' }}></div>
                    <div className="w-2 h-2 bg-[#4ba293] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#4ba293] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-xs text-white/60 ml-2">Thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input 
              type="text" 
              value={inputMessage} 
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about my skills or projects..."
              disabled={isLoading}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 rounded-full border border-[#4ba293]/30 focus:outline-none focus:border-[#4ba293] transition-all duration-300 text-sm disabled:opacity-50 pr-12"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <div className="w-1 h-1 bg-[#4ba293] rounded-full animate-pulse"></div>
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className="p-3 bg-[#4ba293] text-white rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#4ba293]/30 group"
          >
            <FaPaperPlane className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 m-4 justify-center">
      </div>
    </div>
  );
};

export default Chatbot;