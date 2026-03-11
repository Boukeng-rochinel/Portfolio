import React from 'react';
import { Web, Storage, Smartphone, Psychology, Cloud, DataObject, Settings } from "@mui/icons-material";

export const skills = [
  {
    category: "Odoo ERP",
    icon: React.createElement(Settings, { sx: { fontSize: 40 } }),
    technologies: ["Odoo 19", "Python", "XML", "PostgreSQL", "Odoo.sh", "Linux", "Docker"],
    color: "#2E7D32",
    description: "Expert in deploying, scaling, and maintaining Odoo 19 ERP for enterprise clients.",
    proficiency: "Expert",
    projects: 15,
    years: 1
  },
  {
    category: "Frontend Development",
    icon: React.createElement(Web, { sx: { fontSize: 40 } }),
    technologies: ["React", "TypeScript", "Next.js", "Material-UI", "Tailwind CSS", "Redux", "Vue.js"],
    color: "#1976d2",
    description: "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
    proficiency: "Advanced",
    projects: 15,
    years: 3
  },
  {
    category: "Backend Development",
    icon: React.createElement(Storage, { sx: { fontSize: 40 } }),
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs", "GraphQL"],
    color: "#1565C0",
    description: "Building robust server-side applications and APIs with scalable architectures.",
    proficiency: "Advanced",
    projects: 12,
    years: 3
  },
  {
    category: "Mobile Development",
    icon: React.createElement(Smartphone, { sx: { fontSize: 40 } }),
    technologies: ["Flutter", "Dart", "React Native", "iOS", "Android", "Firebase", "Push Notifications"],
    color: "#ED6C02",
    description: "Developing cross-platform mobile applications with native-like performance.",
    proficiency: "Intermediate",
    projects: 8,
    years: 2
  },
  {
    category: "AI/ML Integration",
    icon: React.createElement(Psychology, { sx: { fontSize: 40 } }),
    technologies: ["Python", "scikit-learn", "Pandas", "TensorFlow", "OpenAI", "NLP", "Computer Vision"],
    color: "#9C27B0",
    description: "Integrating artificial intelligence and machine learning capabilities into applications.",
    proficiency: "Intermediate",
    projects: 6,
    years: 2
  },
  {
    category: "DevOps & Cloud",
    icon: React.createElement(Cloud, { sx: { fontSize: 40 } }),
    technologies: ["Docker", "AWS", "Git", "GitHub Actions", "Nginx", "CI/CD", "Linux"],
    color: "#00695C",
    description: "Implementing deployment pipelines and cloud infrastructure management.",
    proficiency: "Intermediate",
    projects: 10,
    years: 2
  }
];
