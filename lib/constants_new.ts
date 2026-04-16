// Personal Information Constants
export const PERSONAL_INFO = {
  name: "Yash Sanjay Gadhave",
  greeting: "Hi, I'm Yash",
  titles: [
    "Information Technology Student",
    "AI & IoT Developer", 
    "Computer Vision Enthusiast",
    "Full-Stack Web Developer"
  ],
  description: "IT undergraduate with CGPA 8.66. Building AI-powered IoT solutions and real-time Computer Vision systems. Proven track record in hackathons and project development.",
  resumeFile: "/Yash_Gadhave_Resume .pdf",
  profileImage: "/profile.jpg"
};

// Education Information
export const EDUCATION = {
  degree: "B-Tech in Information Technology",
  institution: "Information Technology Undergraduate",
  cgpa: "8.66",
  stats: [
    { label: 'CGPA', value: '8.66' },
    { label: 'Projects Completed', value: '4+' },
    { label: 'Technical Skills', value: '15+' }
  ]
};

// About Section Content
export const ABOUT_CONTENT = [
  {
    text: "IT Engineering undergraduate with strong foundation in web development and modern technologies.",
    highlight: ["IT Engineering", "web development", "modern technologies"]
  },
  {
    text: "Proficient in React, JavaScript, and full-stack development with experience building responsive applications.",
    highlight: ["React", "JavaScript", "full-stack development", "responsive applications"]
  },
  {
    text: "Passionate about creating efficient solutions and continuously expanding technical expertise.",
    highlight: ["efficient solutions", "technical expertise"]
  },
  {
    text: "Actively seeking internship opportunities to apply skills and contribute to innovative projects.",
    highlight: ["seeking internship opportunities", "innovative projects"]
  }
];

export const ABOUT_GOAL = "Software Developer | React | JavaScript | Full-Stack Web Developement";

// Projects Data
export const PROJECTS = [
  {
    title: 'Document Preservation System',
    subtitle: 'Digital Heritage Protection',
    period: '2024',
    description: 'Engineered comprehensive document management system with advanced OCR technology and intelligent metadata extraction. Implemented secure user authentication and real-time collaboration features for digital heritage preservation.',
    features: [
      'Built custom OCR engine achieving 92% text recognition accuracy',
      'Created intelligent document classification and tagging system',
      'Implemented real-time collaborative editing with version control',
      'Designed responsive interface for mobile and desktop access',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'Tesseract.js', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/Document-Preservation-System',
    featured: true,
  },
  {
    title: 'AI Customer Support Bot',
    subtitle: 'Intelligent Conversational AI',
    period: '2024',
    description: 'Developed production-ready AI chatbot with natural language processing capabilities for customer service automation. Integrated machine learning models for intent recognition and contextual response generation.',
    features: [
      'Implemented NLP pipeline achieving 85% intent recognition accuracy',
      'Built multi-language support for English and regional languages',
      'Created admin dashboard for conversation analytics and training',
    ],
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/AI-Customer-Support-Bot',
    featured: true,
  },
  {
    title: 'Medical Appointment Platform',
    subtitle: 'Healthcare Management System',
    period: '2024',
    description: 'Built scalable healthcare appointment management system with intelligent scheduling algorithms and patient record management. Designed for multi-clinic operations with real-time availability and automated reminders.',
    features: [
      'Developed optimized scheduling algorithm reducing booking time by 60%',
      'Implemented secure patient data management with HIPAA compliance',
      'Created automated SMS/email reminders reducing no-shows by 40%',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Twilio API'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/Medical-Appointment-Platform',
    featured: true,
  },
  {
    title: 'IoT Home Automation',
    subtitle: 'Smart Home Monitoring',
    period: '2024',
    description: 'Engineered comprehensive IoT home automation system with real-time sensor monitoring and mobile control interface. Integrated multiple smart devices with centralized dashboard for energy management and security monitoring.',
    features: [
      'Built real-time sensor network with 100ms response time',
      'Developed mobile app for remote device control and monitoring',
      'Implemented automated alerts for system anomalies and security events',
    ],
    technologies: ['ESP32', 'React', 'Node.js', 'MQTT', 'MongoDB', 'Telegram API'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/IoT-Home-Automation',
    featured: true,
  },
  {
    title: 'Weather Forecast Dashboard',
    subtitle: 'Real-time Weather Analytics',
    period: '2024',
    description: 'Developed comprehensive weather monitoring system with advanced data visualization and predictive analytics. Integrated multiple weather APIs for accurate forecasting and historical data analysis.',
    features: [
      'Built interactive dashboard with real-time weather updates',
      'Implemented 7-day weather forecasting with confidence intervals',
      'Created data visualization charts for temperature, humidity, and precipitation trends',
      'Integrated geolocation services for automatic location detection',
    ],
    technologies: ['React', 'TypeScript', 'Chart.js', 'Weather APIs', 'Data Visualization'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/Weather-Forecast-Dashboard',
    featured: false,
  },
  {
    title: 'Task Management System',
    subtitle: 'Productivity Optimization Tool',
    period: '2024',
    description: 'Created intelligent task management application with priority-based organization, deadline tracking, and team collaboration features. Implemented machine learning algorithms for task prioritization and productivity insights.',
    features: [
      'Developed smart task categorization and auto-prioritization system',
      'Built collaborative workspace with real-time updates and notifications',
      'Implemented analytics dashboard for productivity tracking and team performance',
      'Created deadline management with automated reminders and escalation system',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Machine Learning', 'Material-UI'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/Task-Management-System',
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Online Shopping Solution',
    period: '2024',
    description: 'Built full-featured e-commerce platform with secure payment processing, inventory management, and real-time order tracking. Implemented responsive design for optimal mobile shopping experience.',
    features: [
      'Integrated secure payment gateway with multiple payment options',
      'Developed advanced product search and filtering system',
      'Implemented real-time inventory management and stock alerts',
      'Created user dashboard with order history and tracking',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/E-Commerce-Platform',
    featured: false,
  },
  {
    title: 'Real-Time Chat Application',
    subtitle: 'Communication Platform',
    period: '2024',
    description: 'Developed scalable real-time chat application with WebSocket connections, user authentication, and message persistence. Features include online status indicators, file sharing, and group chat functionality.',
    features: [
      'Implemented WebSocket-based real-time messaging',
      'Built end-to-end encrypted communication system',
      'Created user presence and typing indicators',
      'Added file sharing and multimedia support',
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'WebRTC'],
    github: 'https://github.com/YashGadhave7890',
    live: 'https://github.com/YashGadhave7890/Real-Time-Chat-Application',
    featured: false,
  },
];

// Contact Information
export const CONTACT_INFO = [
  {
    icon: 'FiMail',
    label: 'Email',
    value: 'yashgadhave248@gmail.com',
    link: 'mailto:yashgadhave248@gmail.com',
  },
  {
    icon: 'FiPhone',
    label: 'Phone',
    value: '+91 9021819895',
    link: 'tel:+919021819895',
  },
  {
    icon: 'FiMapPin',
    label: 'Location',
    value: 'A/P Ranjangaon Khurda, Rahata, India',
    link: null,
  },
];

// Social Links
export const SOCIAL_LINKS = [
  {
    icon: 'FiGithub',
    label: 'GitHub',
    link: 'https://github.com/YashGadhave7890',
    color: 'hover:text-gray-300',
  },
  {
    icon: 'FiLinkedin',
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/yashgadhave',
    color: 'hover:text-blue-400',
  },
];

// Hero Social Links
export const HERO_SOCIAL_LINKS = [
  { icon: 'FiGithub', href: 'https://github.com/YashGadhave7890', label: 'GitHub' },
  { icon: 'FiLinkedin', href: 'https://linkedin.com/in/yashgadhave', label: 'LinkedIn' },
  { icon: 'FiMail', href: 'mailto:yashgadhave248@gmail.com', label: 'Email' },
];

// GitHub Profile Link
export const GITHUB_PROFILE = 'https://github.com/YashGadhave7890';
