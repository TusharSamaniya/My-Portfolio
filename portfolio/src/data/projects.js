export const projects = [
  {
    id: 1,
    name: "SkyFind",
    description:
      "An interactive flight tracking dashboard built with React, react-globe.gl, and a Spring Boot REST API. Powered by the AirLabs API, it visualizes live commercial air traffic, providing route intelligence, live delay heatmaps, and a localized airspace radar directly on the 3D map.",
    skills: ["React", "react-globe.gl", "Spring Boot", "Azure Open AI API"],
    liveLink: "https://skyfind.tech/",
    githubLink: "https://github.com/TusharSamaniya/SkyWatch_Backend-SpringBoot-.git",
    videoUrl: "/videos/skyfind-demo.mp4",
  },
  {
    id: 2,
    name: "Airbnb Clone",
    description:
      "A full-stack property rental platform built with Spring Boot and Bootstrap, featuring a production-ready cloud architecture on AWS. It implements a secure RDS MySQL database layer and utilizes EC2 with custom iptables port redirection to provide a seamless, port-free user experience via DuckDNS. The backend is secured with Spring Security, providing robust authentication and authorization for end-to-end booking management.",
    skills: ["AWS EC2", "AWS RDS", "VPC", "Spring Boot", "Spring Security", "Bootstrap"],
    liveLink: "http://13.201.70.104/",
    githubLink: "https://github.com/TusharSamaniya/Airbnb-Clone.git",
    videoUrl: "/videos/airbnb-clone-demo.mp4",
  },
];

export const miniProjects = [
  {
    id: 1,
    name: "Aadhaar Enrolment Analytics",
    description:
      "A data-driven risk assessment framework built for the UIDAI Data Hackathon 2026 to identify identity coverage gaps across India. It features a custom composite scoring engine to prioritize districts by enrolment momentum and saturation, providing actionable insights to optimize infrastructure deployment and digital inclusion.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebooks"],
    githubLink: "https://github.com/TusharSamaniya/UIDAI-hackathon.git",
    imageUrl: "/images/projects/aadhaar-analytics.png",
  },
  {
    id: 2,
    name: "Our Voice Our Right",
    subtitle: "Mahatma Gandhi National Rural Employment Guarantee Act",
    description:
      "Developed a data-driven backend system using Spring Boot that fetches and manages MGNREGA government data. It enables structured storage and easy access to district performance insights through REST APIs.",
    skills: ["data.gov.in API", "Spring Boot", "MySQL", "Postman"],
    githubLink: "https://github.com/TusharSamaniya/Our-Voice-Our-Right.git",
    videoUrl: "/videos/our-voice-our-right-demo.mp4",
  },
];
