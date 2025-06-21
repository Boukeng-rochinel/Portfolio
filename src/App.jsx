import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import specific icons from the respective packages
import { faUser, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons'; // For solid icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Custom SVG icons as components
const IconGitHub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const IconLinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const IconChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Sample data - replace with your own
  const personalInfo = {
    name: "Boukeng Rochinel",
    title: "Full Stack Developer",
    description:
      "I build exceptional digital experiences with modern technologies. Focused on creating intuitive, responsive web applications that solve real problems.",
    bio: "With over 5 years of experience in web development, I specialize in React, Node.js, and modern frontend frameworks. I'm passionate about clean code, user experience, and continuous learning. When not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.",
    location: "Douala, Cameroon",
    email: "boukengrochinel15@gmail.com",
    github: "https://github.com/Boukeng-rochinel",
    linkedin: "linkedin.com/in/alexjohnson",
  };

  const skills = [
    {
      name: "Web development",
      techs: ["React", "TypeScript", "Flutter", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Mobile Development",
      techs: ["Flutter", "Node.js", "PostgreSQL","Firebase"],
    },
    {
      name: "AI (Artificial Intelligence)",
      techs: ["Python", "scikit-learn"],
    },
    {
      name: "Tools",
      techs: ["Git", "Docker", "AWS", "Jest", "GitHub Actions"],
    },
  ];

  const projects = [
    {
      title: "IGwork",
      description:
        "a freelancing platform designed specifically for Cameroon. The platform aims to connect skilled professionals with job providers while addressing key challenges such as payment restrictions, trust issues, and high service fees on global platforms.",
      techs: ["React", "Node.js", "MongoDB", "Fapship"],
      link: "#",
    },
    {
      title: "Car Fault Diagnosis APP",
      description:
        "A mobile application that uses machine learning to diagnose car faults based on dashboard warning lights and symptoms. It provides users with a list of possible issues and recommended actions.",
      techs: ["Flutter", "Node.js", "Firebase", "Dart"],
      link: "#",
    },
    {
      title: "Task Management Dashboard",
      description:
        "Real-time collaborative task management system with drag-and-drop interface and team permissions.",
      techs: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
      link: "#",
    },
    {
      title: "Electricity Management and monitoring System for cameroon",
      description:
        "A mobile application that allows users to monitor and manage their electricity consumption, pay bills, and receive notifications about outages.",
      techs: ["React Native", "Node.js", "Postgrel", "Express"],
      link: "#",
    },
  ];

  const experience = [
    {
      company: "Myle-Africa",
      role: "Intern Full Stack Developer",
      period: "2025",
      achievements:
        [
        "Worked on a constructing a mailserver using dovecot and postfix and integrating it with a webmail client",
        "Architected new component library used across 5 products",
        "Added some security features to the mailserver like fail2ban and fail2web, spamassassin",
        "Implemented a new feature that allows users to send and receive emails using their own domain names",
        "Collaborated with the team to design and implement a new feature that allows users to manage their email accounts using a web interface",

      ],
    },
    
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-indigo-600">
            {personalInfo.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item
                    ? "text-indigo-600 font-medium"
                    : "text-slate-600 hover:text-indigo-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize py-2 px-4 rounded-md text-left ${
                    activeSection === item
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 to-slate-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-900">
              Hi, I'm {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-indigo-600">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-700 mb-10">
              {personalInfo.description}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md flex items-center"
              >
                View My Work <IconChevronRight className="ml-1" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 rounded-md"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 mb-6">{personalInfo.bio}</p>
            <div className="bg-slate-50 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="font-medium text-slate-800">
                  📍 {personalInfo.location}
                </p>
              </div>
              <div className="flex space-x-6">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
             <FontAwesomeIcon icon={faGithub} /> 
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} /> 
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                  {skillGroup.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-slate-100 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-800"
                  >
                    View Project <IconExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm mb-6 ${
                  index !== experience.length - 1
                    ? "border-l-4 border-indigo-500"
                    : ""
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {job.role}
                  </h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-indigo-600 font-medium">
                      {job.company}
                    </span>
                    <span className="mx-2 text-slate-400">•</span>
                    <span className="text-slate-500">{job.period}</span>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">{job.description}</p>
                <ul className="list-disc list-inside text-slate-600 pl-2">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="mb-1">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Get In Touch
          </h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-8 text-center">
              <p className="text-slate-700 mb-4">
                I'm currently open for new opportunities. Feel free to reach out
                if you'd like to connect!
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
              >
                {personalInfo.email}
              </a>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-slate-400">{personalInfo.title}</p>
            </div>
            <div className="flex space-x-6">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
             <FontAwesomeIcon icon={faGithub} /> 
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} /> 
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400 text-sm">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
