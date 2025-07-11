import { useState, useRef, useEffect } from 'react'
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa'
import cuteCatImage from '../assets/cute cat.jpg'
import { generateGeminiResponse, isGeminiConfigured } from '../utils/geminiAI'

const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: isGeminiConfigured() 
        ? "Hi! I'm Dhruv's AI assistant powered by Gemini. How can I help you today?" 
        : "Hi! I'm Dhruv's AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    const currentInput = inputMessage
    setInputMessage('')
    setIsTyping(true)

    try {
      // Get response from Gemini AI
      const botResponse = await generateGeminiResponse(currentInput, messages)
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }])
    } catch (error) {
      console.error('Error getting AI response:', error)
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now, but I'd love to help you learn about Dhruv! You can explore his projects and skills above, or reach out through the contact form.",
        isBot: true,
        timestamp: new Date()
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div
        className="ai-agent-toggle"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1rem',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 8px 25px rgba(106, 17, 203, 0.3)',
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite'
        }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 12px 35px rgba(106, 17, 203, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(106, 17, 203, 0.3)'
        }}
      >
        {isOpen ? (
          <FaTimes size={24} />
        ) : (
          <>
            <img 
              src={cuteCatImage} 
              alt="Cute Cat" 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            />
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: 'bold',
              whiteSpace: 'nowrap'
            }}>
              pssspsss
            </span>
          </>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="ai-chat-window"
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '2rem',
            width: '350px',
            height: '500px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            zIndex: 1000,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
              color: 'white',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <img 
              src={cuteCatImage} 
              alt="Cute Cat" 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                Cat Assistant {isGeminiConfigured() && <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>⚡ Powered by Gemini</span>}
              </div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Ask me about Dhruv</div>
            </div>
          </div>

          {/* Messages Container */}
          <div
            style={{
              flex: 1,
              padding: '1rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  justifyContent: message.isBot ? 'flex-start' : 'flex-end',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}
              >
                {message.isBot && (
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '3px'
                    }}
                  >
                    <img 
                      src={cuteCatImage} 
                      alt="Cute Cat" 
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}
                
                <div
                  style={{
                    maxWidth: '70%',
                    padding: '0.75rem 1rem',
                    borderRadius: message.isBot ? '15px 15px 15px 5px' : '15px 15px 5px 15px',
                    background: message.isBot 
                      ? 'rgba(106, 17, 203, 0.1)' 
                      : 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
                    color: message.isBot ? '#333' : 'white',
                    fontSize: '0.9rem',
                    lineHeight: '1.4',
                    wordWrap: 'break-word'
                  }}
                >
                  {message.text}
                </div>

                {!message.isBot && (
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(106, 17, 203, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6A11CB',
                      fontSize: '16px'
                    }}
                  >
                    <FaUser />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3px'
                  }}
                >
                  <img 
                    src={cuteCatImage} 
                    alt="Cute Cat" 
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '15px 15px 15px 5px',
                    background: 'rgba(106, 17, 203, 0.1)',
                    color: '#666',
                    fontStyle: 'italic'
                  }}
                >
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: '1rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Dhruv..."
              style={{
                flex: 1,
                padding: '0.75rem',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '20px',
                outline: 'none',
                fontSize: '0.9rem',
                background: 'rgba(255, 255, 255, 0.8)'
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: inputMessage.trim() 
                  ? 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)' 
                  : 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                border: 'none',
                cursor: inputMessage.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 8px 25px rgba(106, 17, 203, 0.3), 0 0 0 0 rgba(106, 17, 203, 0.7);
          }
          70% {
            box-shadow: 0 8px 25px rgba(106, 17, 203, 0.3), 0 0 0 10px rgba(106, 17, 203, 0);
          }
          100% {
            box-shadow: 0 8px 25px rgba(106, 17, 203, 0.3), 0 0 0 0 rgba(106, 17, 203, 0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .ai-chat-window {
            width: 300px !important;
            height: 450px !important;
            bottom: 5rem !important;
            right: 1rem !important;
          }
          
          .ai-agent-toggle {
            bottom: 1.5rem !important;
            right: 1.5rem !important;
            padding: 0.6rem 0.8rem !important;
          }
          
          .ai-agent-toggle span:last-child {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .ai-chat-window {
            width: 280px !important;
            height: 400px !important;
            right: 0.5rem !important;
          }
          
          .ai-agent-toggle {
            bottom: 1rem !important;
            right: 1rem !important;
            padding: 0.5rem 0.7rem !important;
          }
          
          .ai-agent-toggle span:first-child {
            font-size: 20px !important;
          }
          
          .ai-agent-toggle span:last-child {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default AIAgent
