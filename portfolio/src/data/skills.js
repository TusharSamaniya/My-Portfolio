import { FiCode, FiCloud, FiDatabase, FiLock, FiZap } from 'react-icons/fi';

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    icon: FiCode,
    color: 'from-indigo-600 to-purple-600',
    skills: ['Java', 'Spring Boot', 'Security', 'Data JPA', 'REST API', 'MVC', 'Microservices'],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Tools',
    icon: FiCloud,
    color: 'from-blue-600 to-cyan-600',
    skills: ['AWS', 'VPC', 'EC2', 'RDS', 'S3', 'IAM', 'Docker', 'Git', 'Postman', 'Maven'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: FiDatabase,
    color: 'from-emerald-600 to-teal-600',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'Hibernate ORM', 'Database Design'],
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: FiLock,
    color: 'from-orange-600 to-red-600',
    skills: ['JWT', 'OAuth 2.0', 'RBAC', 'HTTPS/TLS', 'REST Principles'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    icon: FiZap,
    color: 'from-pink-600 to-purple-600',
    skills: ['OpenAI API', 'Gemini API', 'Pinecone', 'Semantic Search', 'Function Calling'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FiCode,
    color: 'from-violet-600 to-indigo-600',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
  },
];
