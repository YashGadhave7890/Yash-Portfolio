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

export const ABOUT_GOAL = "Software Developer | React | JavaScript | Full-Stack Web Development";

// Skills Categories
export const SKILLS_CATEGORIES = [
  {
    title: 'Programming',
    icon: 'FiCode',
    color: 'cyan',
    skills: [
      { name: 'Python', icon: 'SiPython', proficiency: 90 },
      { name: 'Java', icon: 'FiCode', proficiency: 75 },
      { name: 'JavaScript', icon: 'SiJavascript', proficiency: 85 },
      { name: 'PHP', icon: 'SiPhp', proficiency: 70 },
    ],
  },
  {
    title: 'AI & Computer Vision',
    icon: 'FiCode',
    color: 'blue',
    skills: [
      { name: 'OpenCV', proficiency: 80 },
      { name: 'MediaPipe', proficiency: 75 },
      { name: 'NumPy', proficiency: 85 },
      { name: 'Pandas', proficiency: 80 },
    ],
  },
  {
    title: 'IoT Tools',
    icon: 'FiDatabase',
    color: 'purple',
    skills: [
      { name: 'ESP32', proficiency: 85 },
      { name: 'Arduino', proficiency: 80 },
      { name: 'Sensors', proficiency: 90 },
      { name: 'Telegram Bot API', proficiency: 75 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: 'FiTool',
    color: 'green',
    skills: [
      { name: 'HTML', proficiency: 95 },
      { name: 'CSS', proficiency: 90 },
      { name: 'JavaScript', icon: 'SiJavascript', proficiency: 85 },
      { name: 'PHP', icon: 'SiPhp', proficiency: 70 },
      { name: 'MySQL', icon: 'SiMysql', proficiency: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: 'FiTool',
    color: 'cyan',
    skills: [
      { name: 'Git', icon: 'SiGithub', proficiency: 85 },
      { name: 'Docker', proficiency: 75 },
      { name: 'VS Code', proficiency: 95 },
      { name: 'Postman', proficiency: 80 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'FiTool',
    color: 'blue',
    skills: [
      { name: 'Team Collaboration', proficiency: 90 },
      { name: 'Communication', proficiency: 85 },
      { name: 'Adaptability', proficiency: 95 },
      { name: 'Problem Solving', proficiency: 88 },
    ],
  },
];

// Projects Data
export const PROJECTS = [
  {
    title: 'Document Management System',
    subtitle: 'Enterprise Document Tracking',
    period: '2024',
    description: 'Built enterprise-grade document management platform with advanced version control and secure tracking capabilities. Implemented comprehensive audit trails and automated backup systems for business-critical document workflows.',
    features: [
      'Developed secure document tracking with role-based access control',
      'Implemented automated version control with 99.9% accuracy',
      'Created real-time audit logging for compliance requirements',
    ],
    technologies: ['Python', 'PostgreSQL', 'REST APIs', 'JWT Authentication', 'Docker'],
    github: 'https://github.com/YashGadhave7890/Document-Preservation-Traceability-System',
    live: 'https://github.com/YashGadhave7890/Document-Preservation-Traceability-System',
    image: '/dms.jpg',
    featured: true,
  },
  {
    title: 'IoT Home Automation',
    subtitle: 'Smart Home Monitoring System',
    period: '2024',
    description: 'Engineered comprehensive IoT home automation system with real-time sensor monitoring and mobile control interface. Integrated multiple smart devices with centralized dashboard for energy management and security monitoring.',
    features: [
      'Built real-time sensor network with 100ms response time',
      'Developed mobile app for remote device control and monitoring',
      'Implemented automated alerts for system anomalies and security events',
    ],
    technologies: ['ESP32', 'React', 'Node.js', 'MQTT', 'MongoDB', 'Telegram API'],
    github: '',
    live: '',
    image: '/iot.jpg',
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
    github: 'https://github.com/YashGadhave7890/AI-CHATBOT',
    live: 'https://github.com/YashGadhave7890/AI-CHATBOT',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
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
    github: 'https://github.com/YashGadhave7890/Hospital-Management-System',
    live: 'https://github.com/YashGadhave7890/Hospital-Management-System',
    image: '/mas.jpg',
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
    github: 'https://github.com/YashGadhave7890/Weather-API',
    live: 'https://github.com/YashGadhave7890/Weather-API',
    image: '/was.jpg',
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
      'Implemented productivity analytics and performance tracking dashboard',
      'Created automated workflow suggestions based on user behavior patterns',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Machine Learning'],
    github: 'https://github.com/YashGadhave7890/Todo-List',
    live: 'https://github.com/YashGadhave7890/Todo-List',
    image: '/todo.png',
    featured: false,
  },
];

// Reading Articles - Trending 2026 Tech Topics
export const READING_ARTICLES = [
  {
    id: 1,
    title: "The Rise of AI Agents: Autonomous Systems in 2026",
    excerpt: "Exploring how AI agents are revolutionizing software development with autonomous decision-making capabilities and real-world applications in enterprise environments.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    date: "March 2024",
    readTime: "12 min read",
    category: "AI",
    tags: ["AI Agents", "Autonomous Systems", "Machine Learning", "2026 Trends"],
    url: "https://techcrunch.com/category/artificial-intelligence/",
    source: "TechCrunch"
  },
  {
    id: 2,
    title: "WebAssembly and the Future of Web Performance",
    excerpt: "How WebAssembly is changing the landscape of web development, enabling near-native performance for complex applications directly in browsers.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    date: "March 2024",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["WebAssembly", "Performance", "JavaScript", "Web3"],
    url: "https://developer.mozilla.org/en-US/docs/WebAssembly",
    source: "MDN Web Docs"
  },
  {
    id: 3,
    title: "Edge Computing: Processing at the Network Edge",
    excerpt: "Understanding how edge computing is transforming IoT and real-time processing, reducing latency and enabling new possibilities for connected devices.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "February 2024",
    readTime: "8 min read",
    category: "IoT",
    tags: ["Edge Computing", "IoT", "5G", "Real-time Processing"],
    url: "https://www.cloudflare.com/learning/edge-computing/what-is-edge-computing/",
    source: "Cloudflare"
  },
  {
    id: 4,
    title: "Quantum Computing Breakthroughs in 2024",
    excerpt: "Latest developments in quantum computing and their potential impact on cryptography, drug discovery, and complex problem solving.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    date: "February 2024",
    readTime: "15 min read",
    category: "Emerging Tech",
    tags: ["Quantum Computing", "Cryptography", "Research", "Future Tech"],
    url: "https://www.quantamagazine.org/computer-science/",
    source: "Quanta Magazine"
  },
  {
    id: 5,
    title: "The Evolution of Serverless Architecture",
    excerpt: "How serverless computing is evolving with new patterns, edge deployment, and improved developer experience for cloud-native applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    date: "January 2024",
    readTime: "9 min read",
    category: "Cloud",
    tags: ["Serverless", "Cloud Computing", "AWS", "DevOps"],
    url: "https://serverless-stack.com/",
    source: "Serverless Stack"
  },
  {
    id: 6,
    title: "Rust in Systems Programming: A Modern Alternative",
    excerpt: "Why Rust is gaining traction in systems programming, offering memory safety without performance penalties compared to traditional languages.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    date: "January 2024",
    readTime: "11 min read",
    category: "Programming",
    tags: ["Rust", "Systems Programming", "Memory Safety", "Performance"],
    url: "https://www.rust-lang.org/",
    source: "Rust Official"
  }
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
