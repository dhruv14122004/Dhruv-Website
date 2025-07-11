// Frontend AI utility - calls backend API instead of direct Gemini calls

const API_BASE_URL = 'http://localhost:5000/api';

// Smart fallback responses for when backend is not available
const fallbackResponses = {
  greeting: "Hello! I'm Dhruv's AI assistant. I'm here to help you learn about his skills, projects, and experience. Feel free to ask me anything about his work or background!",
  skill: "Dhruv is skilled in full-stack development with expertise in React, JavaScript, Node.js, Python, and modern web technologies. He's passionate about creating innovative applications and solving complex problems.",
  project: "Dhruv has worked on various exciting projects including web applications, React projects, and full-stack development. You can check out his projects section above to see his latest work!",
  contact: "I'd be happy to help you get in touch with Dhruv! Please use the contact form on this website, and he'll get back to you soon. He's always open to discussing new opportunities and collaborations.",
  experience: "Dhruv has experience in full-stack development, specializing in modern web technologies. He's worked on various projects involving React, Node.js, databases, and responsive design.",
  default: "That's a great question! I'd love to help you learn more about Dhruv. You can explore his projects and skills on this website, or feel free to reach out through the contact form for more specific information."
};

// Function to generate AI response by calling backend
export const generateGeminiResponse = async (userMessage, conversationHistory = []) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        conversationHistory: conversationHistory
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success && data.response) {
      return data.response;
    } else {
      throw new Error(data.error || 'Failed to get AI response');
    }
  } catch (error) {
    console.error('Backend AI Error:', error);
    
    // Use fallback based on keywords if backend is unavailable
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return fallbackResponses.project;
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return fallbackResponses.skill;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return fallbackResponses.contact;
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return fallbackResponses.experience;
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return fallbackResponses.greeting;
    }
    
    return fallbackResponses.default;
  }
};

// Check if Gemini is configured by calling backend
export const isGeminiConfigured = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'test',
        conversationHistory: []
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data.isGeminiConfigured || false;
    }
    return false;
  } catch (error) {
    return false;
  }
};
