import React, { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, Award, Mail, Phone, Download, Github, Linkedin, ExternalLink, Database, Globe, Server, Cpu, Box, Zap, Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Tech Intern",
      company: "REVEZA",
      period: "Nov 2024 – Dec 2025",
      points: [
        "Contributed to various technical and client-facing tasks with focus on quality and efficiency",
        "Conducted field visits to interact with clients and gather valuable feedback",
        "Analyzed service performance metrics and identified key areas for improvement",
        "Collaborated with team to develop solutions enhancing systems and addressing client issues",
        "Integrated client feedback to optimize services and improve user satisfaction"
      ]
    }
  ];

  const projects = [
    {
      title: "User Management System",
      tech: "Node.js, Express.js, MongoDB Atlas",
      description: "Developed a server-side web application implementing CRUD operations for user data management with efficient data storage and retrieval using MongoDB Atlas.",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Online Reservation System for Hotels",
      tech: "HTML, CSS, JavaScript, React",
      description: "Designed a user-friendly online reservation platform with calendar view for table availability, reservation form, and confirmation page.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const virtualExperiences = [
    {
      company: "Skyscanner",
      title: "Front-End Software Engineering Virtual Experience",
      description: "Built a web application for selecting travel dates using React and Skyscanner's Backpack library with MongoDB Atlas integration."
    },
    {
      company: "Citi",
      title: "Technology Software Development Virtual Experience",
      description: "Improved loan management system, created UML state diagrams, and researched ML systems for credit risk assessment."
    },
    {
      company: "J.P. Morgan",
      title: "Software Engineering Virtual Experience",
      description: "Set up development environment, fixed broken files, and integrated Perspective library for live data visualization."
    }
  ];

  const skills = {
    "Programming": ["Python", "JavaScript"],
    "Web Technologies": ["React", "Node.js", "Express.js", "HTML", "CSS"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools & Others": ["Git", "VS Code", "AI/ML", "Cloud"]
  };

  const certifications = [
    "Full Stack Python - Prostack Academy",
    "Meta Frontend Developer",
    "CCNA (Cisco)",
    "Elements of AI",
    "Google Cloud: Generative AI",
    "IBM Python for Data Science"
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Code className="logo-icon" />
            <span>Sahil Dhiman</span>
          </div>
          
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  className={activeSection === item.toLowerCase() ? 'active' : ''}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hello, I'm</div>
            <h1 className="hero-title">
              Sahil Dhiman
              <span className="wave">👋</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typed-text">Full Stack Developer</span>
            </div>
            <p className="hero-description">
              Computer Science graduate passionate about building impactful solutions.
              Always curious, always learning, and ready for new challenges.
            </p>
            <div className="hero-buttons">
              <a href="/Sahil_Dhiman.pdf" download className="btn btn-primary">
                <Download className="btn-icon" />
                Download Resume
              </a>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="image-glow"></div>
              <img src="/profile.jpg" alt="Sahil Dhiman" className="profile-pic" />
              <div className="floating-icons">
                <div className="icon-float icon-1"><Code /></div>
                <div className="icon-float icon-2"><Database /></div>
                <div className="icon-float icon-3"><Cpu /></div>
                <div className="icon-float icon-4"><Server /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            <GraduationCap className="section-icon" />
            About Me
          </h2>
          
          <div className="about-content">
            <div className="about-card">
              <h3>Education</h3>
              <div className="education-item">
                <div className="edu-header">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <span className="year">2021-2023</span>
                </div>
                <p className="institute">Amrita Vishwa Vidyapeetham</p>
                <p className="score">CGPA: 8.1</p>
              </div>
              <div className="education-item">
                <div className="edu-header">
                  <h4>Bachelor of Science (B.Sc)</h4>
                  <span className="year">2017-2020</span>
                </div>
                <p className="institute">Lyallpur Khalsa College, Jalandhar</p>
                <p className="score">Percentage: 60.6%</p>
              </div>
            </div>

            <div className="about-card">
              <h3>Languages</h3>
              <div className="language-grid">
                <div className="language-item">
                  <Globe className="lang-icon" />
                  <span>English (Fluent)</span>
                </div>
                <div className="language-item">
                  <Globe className="lang-icon" />
                  <span>Hindi (Fluent)</span>
                </div>
                <div className="language-item">
                  <Globe className="lang-icon" />
                  <span>Punjabi (Fluent)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">
            <Briefcase className="section-icon" />
            Experience
          </h2>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <h3>{exp.title}</h3>
                    <span className="period">{exp.period}</span>
                  </div>
                  <h4 className="company">{exp.company}</h4>
                  <ul className="exp-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="virtual-experiences">
            <h3 className="subsection-title">Virtual Job Simulations</h3>
            <div className="virtual-grid">
              {virtualExperiences.map((vexp, index) => (
                <div key={index} className="virtual-card">
                  <div className="virtual-icon">
                    <ExternalLink />
                  </div>
                  <h4>{vexp.company}</h4>
                  <p className="virtual-title">{vexp.title}</p>
                  <p className="virtual-desc">{vexp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            <Box className="section-icon" />
            Projects
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <div className="project-tech">{project.tech}</div>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            <Zap className="section-icon" />
            Technical Skills
          </h2>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="certifications">
            <h3 className="subsection-title">
              <Award className="inline-icon" />
              Certifications
            </h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <Award className="cert-icon" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <Mail className="section-icon" />
            Get In Touch
          </h2>

          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-cards">
              <a href="tel:+919015130859" className="contact-card">
                <div className="contact-icon phone-icon">
                  <Phone />
                </div>
                <h3>Phone</h3>
                <p>+91-9015130859</p>
              </a>

              <a href="mailto:sdhiman1509@gmail.com" className="contact-card">
                <div className="contact-icon email-icon">
                  <Mail />
                </div>
                <h3>Email</h3>
                <p>sdhiman1509@gmail.com</p>
              </a>

              <a href="/Sahil_Dhiman.pdf" download className="contact-card">
                <div className="contact-icon resume-icon">
                  <Download />
                </div>
                <h3>Resume</h3>
                <p>Download PDF</p>
              </a>

              <a href="https://github.com/SahilD1509" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon github-icon">
                  <Github />
                </div>
                <h3>GitHub</h3>
                <p>View Projects</p>
              </a>

              <a href="https://www.linkedin.com/in/sahil-dhiman-b10261255/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon linkedin-icon">
                  <Linkedin />
                </div>
                <h3>LinkedIn</h3>
                <p>Connect</p>
              </a>
            </div>

            <div className="location-info">
              <p>📍 Based in Bangalore, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Sahil Dhiman. All rights reserved.</p>
          <p className="footer-tagline">Built with React ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;