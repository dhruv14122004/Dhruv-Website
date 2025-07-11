import { GoogleGenerativeAI } from '@google/generative-ai'

// Get API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

if (!API_KEY) {
  console.warn('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file')
}

// Initialize the Gemini AI
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

// Get the generative model - Updated to use the correct model name
let model = genAI ? genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }) : null

// Function to find the best working model
export const findWorkingModel = async () => {
  if (!genAI || !API_KEY) return null

  const modelsToTry = [
    'gemini-1.5-flash',
    'gemini-1.5-pro', 
    'gemini-pro',
    'gemini-1.0-pro'
  ]

  for (const modelName of modelsToTry) {
    try {
      const testModel = genAI.getGenerativeModel({ model: modelName })
      await testModel.generateContent('Test')
      
      // If successful, update the global model variable
      model = testModel
      return modelName
    } catch (error) {
      // Model not available, try next one
    }
  }
  
  return null
}

// Context about Dhruv for the AI
const DHRUV_CONTEXT = `
You are Dhruv Sharma's AI assistant on his portfolio website. Here's what you should know about Dhruv:

ABOUT DHRUV:
- Full-stack developer passionate about creating innovative web applications
- Specializes in React, JavaScript, Node.js, Python, and modern web technologies
- Experience in building responsive, user-friendly applications
- Currently pursuing his career in software development
- Always eager to learn new technologies and take on challenging projects

SKILLS & TECHNOLOGIES:
- Frontend: React, JavaScript, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Python, Express.js
- Database: MongoDB, MySQL
- Tools: Git, VS Code, Figma
- Other: RESTful APIs, Responsive Design, UI/UX principles

PERSONALITY:
- Professional but friendly
- Helpful and knowledgeable
- Enthusiastic about technology
- Always willing to discuss opportunities

INSTRUCTIONS:
- Keep responses concise and helpful
- Be enthusiastic about Dhruv's work and skills
- Guide visitors to relevant sections of his portfolio
- Encourage potential employers/collaborators to reach out
- If asked about topics unrelated to Dhruv or web development, politely redirect to his work
- Use a warm, professional tone that reflects Dhruv's personality
- End responses with relevant suggestions about exploring his portfolio or getting in touch

Remember: You represent Dhruv professionally, so maintain a balance between being friendly and maintaining credibility.
`

export const generateGeminiResponse = async (userMessage, conversationHistory = []) => {
  // Fallback responses if API is not available
  const fallbackResponses = {
    project: "Dhruv has worked on various exciting projects including web applications, React projects, and full-stack development. You can check out his projects section above to see his latest work!",
    skill: "Dhruv specializes in React, JavaScript, Node.js, Python, and modern web development technologies. He's passionate about creating innovative solutions and user-friendly applications.",
    contact: "You can reach out to Dhruv through the contact form above, or connect with him on LinkedIn and GitHub using the social links. He's always open to discussing new opportunities!",
    experience: "Dhruv is a passionate developer with experience in full-stack development, React applications, and modern web technologies. Check out his about section to learn more about his journey!",
    greeting: "Hello! Great to meet you! I'm here to help you learn more about Dhruv and his work. What would you like to know?",
    default: "That's an interesting question! I'd recommend checking out Dhruv's portfolio sections above, or feel free to reach out to him directly through the contact form. Is there anything specific about his work or skills you'd like to know?"
  }

  // If no API key or model available, use fallback
  if (!model || !API_KEY) {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return fallbackResponses.project
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return fallbackResponses.skill
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email')) {
      return fallbackResponses.contact
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return fallbackResponses.experience
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return fallbackResponses.greeting
    }
    return fallbackResponses.default
  }

  try {
    // Prepare the conversation context
    let conversationContext = DHRUV_CONTEXT
    
    // Add recent conversation history for context
    if (conversationHistory.length > 0) {
      conversationContext += "\n\nRECENT CONVERSATION:\n"
      conversationHistory.slice(-6).forEach(msg => {
        const role = msg.isBot ? "Assistant" : "Visitor"
        conversationContext += `${role}: ${msg.text}\n`
      })
    }

    // Create the prompt
    const prompt = `${conversationContext}

Current visitor message: "${userMessage}"

Please respond as Dhruv's AI assistant. Keep your response conversational, helpful, and under 150 words.`

    // Generate response using Gemini
    const result = await model.generateContent(prompt)
    const response = await result.response
    const generatedText = response.text()

    // Clean up the response
    let cleanResponse = generatedText
      .replace(/^\*\*.*?\*\*:?\s*/g, '') // Remove bold headers
      .replace(/^(Assistant|AI Assistant|Dhruv's Assistant):\s*/gi, '') // Remove role prefixes
      .trim()

    // Ensure response isn't too long
    if (cleanResponse.length > 300) {
      cleanResponse = cleanResponse.substring(0, 297) + '...'
    }

    return cleanResponse || fallbackResponses.default

  } catch (error) {
    console.error('Gemini AI Error:', error)
    
    // If this is a model error, try to find a working model
    if (error.message?.includes('not found') || error.message?.includes('404')) {
      const workingModel = await findWorkingModel()
      if (workingModel) {
        // Retry the request with the new model
        try {
          const prompt = `${conversationContext}

Current visitor message: "${userMessage}"

Please respond as Dhruv's AI assistant. Keep your response conversational, helpful, and under 150 words.`
          
          const retryResult = await model.generateContent(prompt)
          const retryResponse = await retryResult.response
          const retryText = retryResponse.text()
          
          let cleanRetryResponse = retryText
            .replace(/^\*\*.*?\*\*:?\s*/g, '')
            .replace(/^(Assistant|AI Assistant|Dhruv's Assistant):\s*/gi, '')
            .trim()
            
          if (cleanRetryResponse.length > 300) {
            cleanRetryResponse = cleanRetryResponse.substring(0, 297) + '...'
          }
          
          return cleanRetryResponse || fallbackResponses.default
        } catch (retryError) {
          // Retry failed, use fallback
        }
      }
    }
    
    // Use fallback based on keywords if API fails
    const lowerMessage = userMessage.toLowerCase()
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return fallbackResponses.project
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return fallbackResponses.skill
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return fallbackResponses.contact
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return fallbackResponses.greeting
    }
    
    return "I'm having trouble connecting right now, but I'd love to help you learn about Dhruv! You can explore his projects and skills above, or reach out through the contact form."
  }
}

export const isGeminiConfigured = () => {
  return !!(API_KEY && model)
}
