import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaFile, FaLightbulb, FaUser } from 'react-icons/fa';

const AssistantContainer = styled.div`
  padding: 2rem;
  height: calc(100vh - 80px);
  display: flex;
  gap: 2rem;
`;

const ChatSection = styled.div`
  flex: 1;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AssistantIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #0E0D0C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const AssistantInfo = styled.div`
  h2 {
    font-family: 'PP Mori', sans-serif;
    font-size: 1.25rem;
    color: #0E0D0C;
  }
  
  p {
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    ${props => props.isUser ? `
      background: #0E0D0C;
      color: white;
    ` : `
      background: #f8fafc;
      color: #0E0D0C;
    `}
  }
  
  .content {
    padding: 1rem;
    border-radius: 12px;
    max-width: 70%;
    
    ${props => props.isUser ? `
      background: #0E0D0C;
      color: white;
      margin-left: auto;
    ` : `
      background: #f8fafc;
      color: #0E0D0C;
    `}
  }
`;

const ChatInput = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #0E0D0C;
  }
`;

const SendButton = styled(motion.button)`
  padding: 1rem;
  background: #0E0D0C;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SuggestionsPanel = styled.div`
  width: 300px;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SuggestionTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 1rem;
  color: #0E0D0C;
  margin-bottom: 1rem;
`;

const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Suggestion = styled(motion.div)`
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  cursor: pointer;
  
  h4 {
    font-size: 0.875rem;
    color: #0E0D0C;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.75rem;
    color: #64748b;
  }
`;
const AIAssistantSection = () => {
    const [messages, setMessages] = useState([
      {
        id: 1,
        content: "Hello! I'm your AI legal assistant. How can I help you today?",
        isUser: false,
        timestamp: new Date()
      }
    ]);
    
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);
  
    const suggestions = [
      {
        title: "Create New Document",
        description: "Get help drafting a legal document",
        icon: <FaFile />
      },
      {
        title: "Legal Advice",
        description: "Ask questions about Nigerian law",
        icon: <FaLightbulb />
      },
      {
        title: "Document Review",
        description: "Get AI analysis of your documents",
        icon: <FaRobot />
      }
    ];
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    const handleSendMessage = async () => {
      if (!inputMessage.trim()) return;
  
      const newUserMessage = {
        id: messages.length + 1,
        content: inputMessage,
        isUser: true,
        timestamp: new Date()
      };
  
      setMessages(prev => [...prev, newUserMessage]);
      setInputMessage('');
  
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          content: "I understand you need help with that. Let me assist you...",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    };
  
    const handleSuggestionClick = (suggestion) => {
      setInputMessage(`Help me with ${suggestion.title.toLowerCase()}`);
    };
  
    return (
      <AssistantContainer>
        <ChatSection>
          <ChatHeader>
            <AssistantIcon>
              <FaRobot />
            </AssistantIcon>
            <AssistantInfo>
              <h2>AI Legal Assistant</h2>
              <p>Available 24/7 for your legal queries</p>
            </AssistantInfo>
          </ChatHeader>
  
          <ChatMessages>
            {messages.map((message) => (
              <Message
                key={message.id}
                isUser={message.isUser}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="avatar">
                  {message.isUser ? <FaUser /> : <FaRobot />}
                </div>
                <div className="content">
                  {message.content}
                </div>
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </ChatMessages>
  
          <ChatInput>
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <SendButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
            >
              <FaPaperPlane />
            </SendButton>
          </ChatInput>
        </ChatSection>
  
        <SuggestionsPanel>
          <SuggestionTitle>Suggested Actions</SuggestionTitle>
          <SuggestionList>
            {suggestions.map((suggestion, index) => (
              <Suggestion
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <h4>{suggestion.title}</h4>
                <p>{suggestion.description}</p>
              </Suggestion>
            ))}
          </SuggestionList>
        </SuggestionsPanel>
      </AssistantContainer>
    );
  };
  
  export default AIAssistantSection;
  