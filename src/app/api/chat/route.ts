import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are Sambatawa AI, a personal AI assistant for Inas Samara Taqia (also known as Sambatawa). You are helping visitors learn about her skills, projects, and collaboration opportunities.

About Inas Samara Taqia:
- Name: Inas Samara Taqia (Sambatawa)
- Age: 21 years old
- Email: inassamarataqia@gmail.com
- Location: Bogor, Indonesia
- Education: Computer Engineering student at IPB University (Vocational School Program)
- Status: Available for collaboration and projects

Technical Skills:
- Frontend: React, Next.js, TypeScript, JavaScript, HTML/CSS
- Backend: Node.js, Python
- AI/ML: Machine Learning, Natural Language Processing, Computer Vision
- Web3: Blockchain, Smart Contracts, Decentralized Applications
- Tools: Git, REST APIs

Project Experience:
- AI chatbots and conversational interfaces
- Machine learning models for prediction and classification
- Responsive web applications with modern frameworks
- Decentralized Web3 solutions
- Full-stack applications with database integration

Interests & Hobbies:
- AI/ML development
- Music and design
- Travel and writing
- 3D Design CAD
- Continuous learning and coding

Collaboration:
- Open to exciting projects and collaborations
- Specializes in web development, AI integration, and innovative tech solutions
- Available for freelance work and partnerships
- Responds to inquiries within 24 hours

Communication Style:
- Friendly, professional, and enthusiastic
- Focuses on creating value and innovative solutions
- Passionate about technology and its potential to solve problems
- Encourages collaboration and knowledge sharing

Guidelines:
1. Always respond as Sambatawa AI, speaking about Inas in first person ("I", "my", etc.)
2. Be helpful and informative about her skills and experience
3. Encourage collaboration when appropriate
4. Keep responses concise but comprehensive
5. If asked about availability, mention she's open to projects
6. For technical questions, provide specific examples of her experience
7. Maintain a positive and enthusiastic tone
8. If you don't know something specific, be honest but offer to help find information

Remember: You are representing Inas Samara Taqia professionally while being approachable and helpful to potential collaborators, employers, or curious visitors.`;

export async function POST(request: NextRequest) {
  let message: string = '';
  
  try {
    const body = await request.json();
    message = body.message || '';

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      const fallbackResponse = generateFallbackResponse(message);
      return NextResponse.json({ response: fallbackResponse });
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `${SYSTEM_PROMPT}\n\nUser: ${message}\n\nResponse:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Gemini API returned empty response');
    }

    return NextResponse.json({ response: text.trim() });

  } catch (error) {
    console.error('Chat API Error:', error);
    const fallbackResponse = generateFallbackResponse(message);
    return NextResponse.json({ response: fallbackResponse });
  }
}

function generateFallbackResponse(message: string): string {
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes('skill') || lowerCaseMessage.includes('what can you do')) {
    return 'I specialize in React, Next.js, Python, and AI/ML development. I create intelligent web applications with modern technologies, build machine learning models, and develop decentralized Web3 solutions. My expertise spans from frontend development to backend architecture.';
  }
  
  if (lowerCaseMessage.includes('project') || lowerCaseMessage.includes('work') || lowerCaseMessage.includes('portfolio')) {
    return 'I\'ve built various projects including AI chatbots, machine learning models, responsive web applications with React/Next.js, and decentralized Web3 solutions. Each project focuses on creating innovative, user-centric experiences. You can check out my projects section for detailed information!';
  }
  
  if (lowerCaseMessage.includes('collaborate') || lowerCaseMessage.includes('work together') || lowerCaseMessage.includes('hire')) {
    return 'I\'m always open to exciting collaborations! Whether you need web development, AI integration, or innovative tech solutions, I\'d love to work together. Feel free to reach out through the contact section, and let\'s create something amazing!';
  }
  
  if (lowerCaseMessage.includes('experience') || lowerCaseMessage.includes('background') || lowerCaseMessage.includes('about')) {
    return 'I\'m Inas Samara Taqia, a 21-year-old Computer Engineering student at IPB University with a passion for building the next generation of web applications. My journey spans from frontend development to backend architecture, with a deep focus on how machine learning can revolutionize user experiences.';
  }
  
  if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email') || lowerCaseMessage.includes('reach')) {
    return 'You can reach me at inassamarataqia@gmail.com. I\'m also available through the contact form on this portfolio. I typically respond within 24 hours and I\'m excited to discuss potential collaborations!';
  }
  
  if (lowerCaseMessage.includes('web3') || lowerCaseMessage.includes('blockchain') || lowerCaseMessage.includes('decentralized')) {
    return 'I have experience with Web3 technologies including smart contracts, decentralized applications, and blockchain integration. I believe in the future of decentralized systems and enjoy building solutions that leverage blockchain for transparency and security.';
  }
  
  if (lowerCaseMessage.includes('ai') || lowerCaseMessage.includes('machine learning') || lowerCaseMessage.includes('ml')) {
    return 'AI/ML is my passion! I\'ve worked on various machine learning projects, from predictive models to natural language processing. I love integrating AI capabilities into web applications to create more intelligent and personalized user experiences.';
  }
  
  // Default responses
  const defaultResponses = [
    'That\'s interesting! While I focus on web development and AI/ML, I\'d be happy to discuss how my skills might apply to what you\'re asking about. Is there something specific you\'d like to know about my projects or collaboration opportunities?',
    'Great question! My expertise lies in React, Next.js, Python, and AI development. If you\'d like to know more about how I can help with your project, feel free to ask about my skills or past work!',
    'I\'d love to help! My main areas are web development, AI/ML integration, and creating innovative solutions and applications. What specific aspect of my work interests you most?',
    'Thanks for your message! I specialize in building intelligent web applications and AI-powered solutions. If you have a project in mind or want to collaborate, I\'d be excited to hear more about it!'
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
