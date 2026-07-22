// Central content store — sourced from Het Shah's resume.
// Keeping copy here (not scattered in components) makes it easy to update.

export const PROFILE = {
  name: 'Het Shah',
  roles: [
    'AI & Machine Learning Engineer',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Open Source Enthusiast',
  ],
  location: 'Ahmedabad, Gujarat',
  phone: '+91 88491 31985',
  email: 'shet6640@gmail.com',
  github: 'https://github.com/Het200522',
  githubUsername: 'Het200522',
  linkedin: 'https://linkedin.com/in/het-shah',
  resumeFile: '/Het_Shah_Resume.pdf',
  summary:
    "Final-year Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I build AI-driven products end to end — from model to interface — and I'm drawn to problems where a system has to make a judgment call under uncertainty. Currently looking for opportunities in AI/ML and full-stack software development.",
};

export const ABOUT = {
  degree: 'B.Tech, Computer Science Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  university: 'GLS University',
  graduation: '2027',
  cgpa: '7.29',
  description:
    'Passionate AI and Full Stack developer interested in Machine Learning, Web Development, and solving real-world problems using technology.',
};

export const SKILLS = [
  {
    category: 'Programming',
    items: ['Python', 'C++', 'SQL', ],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS',  'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js'],
  },
  {
    category: 'AI / ML',
    items: ['Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'NLP', 'Matplotlib'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Streamlit',  'Canva'],
  },
];

export const PROJECTS = [
  {
    id: 'mediscan',
    title: 'MediScan',
    tag: 'Capstone Project',
    subtitle: 'AI-Powered Disease Prediction System',
    description:
      'An AI-powered healthcare platform that extracts information from medical reports using OCR and predicts likely conditions with machine learning — then turns that into plain-language health recommendations, not just a raw score.',
    highlights: [
      'OCR pipeline for automated report interpretation and data preprocessing',
      'ML models trained for disease prediction from extracted report data',
      'Streamlit interface built for fast, clear report analysis',
    ],
    tech: ['Python', 'Machine Learning', 'OCR', 'OpenCV', 'Scikit-learn', 'Streamlit'],
    status: 'Capstone',
    links: { github: 'https://github.com/Het200522/capstone-main', demo: 'https://jumpshare.com/folder/B8vJXWSeKDKFaX7DwUZQ' },
  },
  {
    id: 'incident-response-agent',
    title: 'Incident Response Agent',
    tag: 'HackBaroda 2026 — Finalist',
    subtitle: 'AI Agents for Cyber Incident Response',
    description:
      'An AI-driven incident management system built for HackBaroda 2026, using Retrieval-Augmented Generation to pull up similar historical incidents and suggest mitigation steps in real time.',
    highlights: [
      'Semantic search over a vector database of past incidents',
      'RAG pipeline for grounded, context-aware response suggestions',
      'Dashboard for live incident tracking and triage',
    ],
    tech: ['Python', 'AI Agents', 'NLP', 'Vector Database', 'RAG'],
    status: 'Finalist',
    links: { github: 'https://github.com/Het200522/rocketride-server' },
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    tag: 'Systems Project',
    subtitle: 'Console-Based Order & Billing System',
    description:
      'A menu-driven restaurant management application built in C, focused on getting the fundamentals right: efficient order handling, accurate billing, and clean inventory tracking.',
    highlights: [
      'Order processing, billing, and inventory management in one flow',
      'Data structures chosen specifically to speed up order handling',
      'Automated bill generation to remove manual calculation errors',
    ],
    tech: ['C', 'Data Structures'],
    status: 'Complete',
    links: { github: 'https://github.com/Het200522/Restaurant_Management_Project' },
  },
];

export const ACHIEVEMENTS = [
  {
    year: '2026',
    title: 'HackBaroda 2026 Finalist',
    description:
      'Reached the finals with the Incident Response Agent, an AI-agent system for automating cyber incident triage.',
    icon: 'trophy',
  },
  {
    year: '2026',
    title: 'Cyber Shadez — Cipher Hunt',
    description: 'Participated in the Cipher Hunt challenge at GLS University.',
    icon: 'shield',
  },
  {
    year: '2025',
    title: 'Green Skills & Artificial Intelligence',
    description:
      'Completed the AI program run by the Edunet Foundation, focused on applying AI to sustainability problems.',
    icon: 'leaf',
  },
];

export const EDUCATION = [
  {
    school: 'GLS University',
    degree: 'B.Tech, Computer Science Engineering',
    detail: 'Specialization: Artificial Intelligence & Machine Learning',
    period: '2023 — 2027',
    meta: 'CGPA: 7.45',
  },
  {
    school: 'Nirman High School',
    degree: 'Higher Secondary Certificate (HSC)',
    detail: null,
    period: '2023',
    meta: 'Percentage: 51',
  },
  {
    school: 'Nirman High School',
    degree: 'Secondary School Certificate (SSC)',
    detail: null,
    period: '2021',
    meta: 'Percentage: 83',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Green Skills & Artificial Intelligence',
    issuer: 'Edunet Foundation',
  },
  {
    title: 'AI Tools & ChatGPT',
    issuer: 'be10x',
  },
  {
    title: 'Hour of AI',
    issuer: 'Certification Program',
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];
