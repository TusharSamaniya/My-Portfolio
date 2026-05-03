import { FiCode, FiCloud, FiDatabase, FiLock, FiZap } from 'react-icons/fi';

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    icon: FiCode,
    iconBg: 'bg-gradient-to-br from-indigo-600 to-indigo-700',
    skills: ['Java', 'Spring Boot', 'Security', 'Data JPA', 'REST', 'MVC', 'Microservices'],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Tools',
    icon: FiCloud,
    iconBg: 'bg-gradient-to-br from-blue-600 to-blue-700',
    skills: ['AWS', 'VPC', 'EC2', 'RDS', 'S3', 'IAM', 'Docker', 'Git', 'Postman', 'Maven'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: FiDatabase,
    iconBg: 'bg-gradient-to-br from-emerald-600 to-emerald-700',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'Hibernate (ORM)', 'Database Design'],
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: FiLock,
    iconBg: 'bg-gradient-to-br from-orange-600 to-orange-700',
    skills: ['JWT', 'OAuth 2.0', 'RBAC', 'HTTPS/TLS'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    icon: FiZap,
    iconBg: 'bg-gradient-to-br from-pink-600 to-pink-700',
    skills: ['OpenAI API', 'Gemini API', 'Pinecone', 'Semantic Search', 'Function Calling'],
  },
];
