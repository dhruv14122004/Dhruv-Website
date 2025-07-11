const { GoogleGenerativeAI } = require('@google/generative-ai');

// Get API key from environment variables
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.warn('Gemini API key not found. Please add GEMINI_API_KEY to your .env file');
}

// Initialize the Gemini AI
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// Get the generative model
let model = genAI ? genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }) : null;

// Function to find the best working model
const findWorkingModel = async () => {
  if (!genAI || !API_KEY) return null;

  const modelsToTry = [
    'gemini-1.5-flash',
    'gemini-1.5-pro', 
    'gemini-pro',
    'gemini-1.0-pro'
  ];

  for (const modelName of modelsToTry) {
    try {
      const testModel = genAI.getGenerativeModel({ model: modelName });
      await testModel.generateContent('Test');
      
      // If successful, update the global model variable
      model = testModel;
      return modelName;
    } catch (error) {
      // Model not available, try next one
    }
  }
  
  return null;
};

// Context about Dhruv for the AI
const DHRUV_CONTEXT = `
You are Dhruv Sharma's AI assistant on his portfolio website. Here's what you should know about Dhruv:

ABOUT DHRUV:
- Full-stack developer passionate about creating innovative web applications
- Specializes in React, JavaScript, Node.js, Python, and modern web technologies
- Experience with databases, cloud services, and responsive design
- Strong problem-solving skills and attention to detail
- Always eager to learn new technologies and tackle challenging projects

KEY PROJECTS:
- Web applications using React and modern frameworks
- Full-stack development with Node.js and Express
- Database integration and API development
- Responsive and user-friendly interfaces

SKILLS:
- Frontend: React, JavaScript, HTML, CSS, Tailwind CSS
- Backend: Node.js, Express, Python
- Databases: MongoDB, SQL
- Tools: Git, VS Code, various development tools

PERSONALITY:
- Professional, helpful, and enthusiastic about technology
- Ready to discuss projects, skills, and potential opportunities
- Guides visitors to relevant sections of the portfolio
- Encourages potential employers and collaborators to get in touch

INSTRUCTIONS:
- Keep responses conversational and professional
- Limit responses to ~150 words for better user experience
- Direct users to specific portfolio sections when relevant
- Always encourage potential employers/clients to reach out via the contact form
- If asked about availability, mention Dhruv is open to new opportunities
- Stay in character as Dhruv's professional representative
`;

// Smart fallback responses for when API is not available
const fallbackResponses = {
  greeting: "Hello! I'm Dhruv's AI assistant. I'm here to help you learn about his skills, projects, and experience. Feel free to ask me anything about his work or background!",
  skills: "Dhruv is skilled in full-stack development with expertise in React, JavaScript, Node.js, Python, and modern web technologies. He's passionate about creating innovative applications and solving complex problems.",
  projects: "Dhruv has worked on various exciting projects including web applications, React projects, and full-stack development. You can check out his projects section above to see his latest work!",
  contact: "I'd be happy to help you get in touch with Dhruv! Please use the contact form on this website, and he'll get back to you soon. He's always open to discussing new opportunities and collaborations.",
  experience: "Dhruv has experience in full-stack development, specializing in modern web technologies. He's worked on various projects involving React, Node.js, databases, and responsive design.",
  default: "That's a great question! I'd love to help you learn more about Dhruv. You can explore his projects and skills on this website, or feel free to reach out through the contact form for more specific information."
};

// Function to generate AI response
const generateGeminiResponse = async (userMessage, conversationHistory = []) => {
  // If no API key or model available, use fallback
  if (!model || !API_KEY) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return fallbackResponses.project;
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return fallbackResponses.skill;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email')) {
      return fallbackResponses.contact;
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return fallbackResponses.experience;
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return fallbackResponses.greeting;
    }
    
    return fallbackResponses.default;
  }

  try {
    // Build conversation context from recent messages
    let conversationContext = DHRUV_CONTEXT;
    
    if (conversationHistory && conversationHistory.length > 0) {
      conversationContext += "\n\nRECENT CONVERSATION:\n";
      // Only include last 6 messages to keep context manageable
      const recentMessages = conversationHistory.slice(-6);
      recentMessages.forEach(msg => {
        if (msg.isBot) {
          conversationContext += `Assistant: ${msg.text}\n`;
        } else {
          conversationContext += `Visitor: ${msg.text}\n`;
        }
      });
    }

    const prompt = `${conversationContext}

Current visitor message: "${userMessage}"

Please respond as Dhruv's AI assistant. Keep your response conversational, helpful, and under 150 words.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean up the response
    const cleanResponse = text
      .replace(/\*\*/g, '') // Remove markdown bold
      .replace(/\*/g, '') // Remove markdown italic
      .replace(/#{1,6}\s/g, '') // Remove markdown headers
      .trim();
    
    return cleanResponse || fallbackResponses.default;
    
  } catch (error) {
    console.error('Gemini AI Error:', error);
    
    // If this is a model error, try to find a working model
    if (error.message?.includes('not found') || error.message?.includes('404')) {
      const workingModel = await findWorkingModel();
      if (workingModel) {
        // Retry the request with the new model
        try {
          const prompt = `${conversationContext}

Current visitor message: "${userMessage}"

Please respond as Dhruv's AI assistant. Keep your response conversational, helpful, and under 150 words.`;
          
          const retryResult = await model.generateContent(prompt);
          const retryResponse = await retryResult.response;
          const retryText = retryResponse.text();
          
          const cleanRetryResponse = retryText
            .replace(/\*\*/g, '')
            .replace(/\*/g, '')
            .replace(/#{1,6}\s/g, '')
            .trim();
          
          return cleanRetryResponse || fallbackResponses.default;
        } catch (retryError) {
          // Retry failed, use fallback
        }
      }
    }
    
    // Use fallback based on keywords if API fails
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
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return fallbackResponses.greeting;
    }
    
    return "I'm having trouble connecting right now, but I'd love to help you learn about Dhruv! You can explore his projects and skills above, or reach out through the contact form.";
  }
};

const isGeminiConfigured = () => {
  return !!(API_KEY && model);
};

module.exports = {
  generateGeminiResponse,
  isGeminiConfigured,
  findWorkingModel
};
