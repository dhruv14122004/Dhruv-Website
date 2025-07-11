// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { generateGeminiResponse, isGeminiConfigured } = require('./services/geminiAI');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// AI Chat endpoint
app.post('/api/chat', async (req, res) => {
  const { message, conversationHistory } = req.body;
  
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required and must be a string.' });
  }

  try {
    const response = await generateGeminiResponse(message, conversationHistory || []);
    res.json({ 
      success: true, 
      response,
      isGeminiConfigured: isGeminiConfigured()
    });
  } catch (error) {
    console.error('AI Chat Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate AI response.',
      response: "I'm having trouble right now, but I'd love to help you learn about Dhruv! You can explore his projects and skills above, or reach out through the contact form."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Server is running');
}
);