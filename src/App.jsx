import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  IconButton,
  Drawer,
  Link,
  TextField,
  Chip,
  useMediaQuery,
  useTheme,
  Dialog,         // Import Dialog
  DialogTitle,    // Import DialogTitle
  DialogContent,  // Import DialogContent
  DialogActions,  // Import DialogActions
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import ComputerIcon from '@mui/icons-material/Computer';
import ConstructionIcon from '@mui/icons-material/Construction';

// For scroll animation/visibility
import { useInView } from "react-intersection-observer";
import { Slide, Fade } from "@mui/material";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State for the project detail dialog
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const personalInfo = {
    name: "Boukeng Rochinel",
    title: "Full Stack Developer",
    description:
      "I build exceptional digital experiences with modern technologies. Focused on creating intuitive, responsive web applications and mobile applications that solve real problems.",
    bio: "With over 2 years of experience in web development, I specialize in React, Flutter, Node.js, and modern frontend frameworks. I'm passionate about clean code, user experience, and continuous learning. When not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.",
    location: "Douala, Cameroon",
    email: "boukengrochinel15@gmail.com",
    github: "https://github.com/Boukeng-rochinel",
    linkedin: "https://www.linkedin.com/in/nash-leo/",
    profilePicture: "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753561380/IMG_20250515_080650_m8yoat.jpg" // Light green placeholder
  };

  const skills = [
    {
      name: "Frontend Development",
      icon: <CodeIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
      techs: ["React", "TypeScript", "Next.js", "Material-UI", "Tailwind CSS (concept only)"], // Added Material-UI, clarified Tailwind
    },
    {
      name: "Backend Development",
      icon: <ComputerIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
      techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      name: "Mobile Development",
      icon: <DevicesIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
      techs: ["Flutter", "Dart", "React Native"],
    },
    {
      name: "AI & Data Science",
      icon: <Typography component="span" sx={{ fontSize: { xs: 32, md: 40 } }} role="img" aria-label="brain">🧠</Typography>,
      techs: ["Python", "scikit-learn", "Pandas"],
    },
    {
      name: "Tools & DevOps",
      icon: <ConstructionIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
      techs: ["Git", "Docker", "AWS", "Jest", "GitHub Actions", "Nginx"],
    },
  ];

  const projects = [
    {
      title: "IGwork",
      description:
        "A freelancing platform designed specifically for Cameroon. The platform aims to connect skilled professionals with job providers while addressing key challenges such as payment restrictions, trust issues, and high service fees on global platforms.",
      techs: ["React", "Node.js", "MongoDB", "Fapship"],
      githubLink: "https://github.com/Boukeng-rochinel/IGwork", // Example GitHub link
      liveLink: "https://igwork-1.onrender.com/", // Example Live link
      image: "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753558945/Screenshot_from_2025-07-26_20-33-42_emzouz.png",
      sampleImages: [
        "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753558945/Screenshot_from_2025-07-26_20-33-58_zordwi.png",
        "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753558945/Screenshot_from_2025-07-26_20-33-42_emzouz.png",
        "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753558945/Screenshot_from_2025-07-26_20-34-10_cmpnc7.png",
      ]
    },
    {
      title: "Car Fault Diagnosis APP",
      description:
        "A mobile application that uses machine learning to diagnose car faults based on dashboard warning lights and symptoms. It provides users with a list of possible issues and recommended actions.",
      techs: ["Flutter", "Node.js", "Firebase", "Dart"],
      githubLink: "https://github.com/Boukeng-rochinel/CarDiagnosisApp",
      liveLink: null, // No live demo
      image: "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753560056/autofix_car1_fly0jk.jpg",
      sampleImages: [
        "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753560057/autofix_car5_r1mkfj.jpg",
        "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753560056/autofix_car2_t7sq97.jpg",
        "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753560056/autofix_car3_w1e5eg.jpg",
        "https://res.cloudinary.com/boukeng-rochinel/image/upload/v1753560057/autofix_car4_jfs4pa.jpg",

      ]
    },
    {
      title: "Task Management Dashboard",
      description:
        "Real-time collaborative task management system with drag-and-drop interface and team permissions. Features user authentication and role-based access control.",
      techs: ["Next.js", "Firebase", "Material-UI", "React DnD"],
      githubLink: "https://github.com/Boukeng-rochinel/TaskDashboard",
      liveLink: "https://task-dashboard-demo.vercel.app/",
      image: "https://via.placeholder.com/800x500/3357FF/FFFFFF?text=Task+Dashboard+Screenshot+1",
      sampleImages: [
        "https://via.placeholder.com/800x500/3357FF/FFFFFF?text=Task+Dashboard+Screenshot+1",
        "https://via.placeholder.com/800x500/3357FF/FFFFFF?text=Task+Dashboard+Screenshot+2",
      ]
    },
    {
      title: "Electricity Management and Monitoring System for Cameroon",
      description:
        "A mobile application that allows users to monitor and manage their electricity consumption, pay bills, and receive notifications about outages. Integrates with local payment gateways.",
      techs: ["React Native", "Node.js", "PostgreSQL", "Express"],
      githubLink: "https://github.com/Boukeng-rochinel/ElectricityMonitor",
      liveLink: null,
      image: "https://via.placeholder.com/800x500/FF33CC/FFFFFF?text=Electricity+Monitor+Screenshot+1",
      sampleImages: [
        "https://via.placeholder.com/800x500/FF33CC/FFFFFF?text=Electricity+Monitor+Screenshot+1",
        "https://via.placeholder.com/800x500/FF33CC/FFFFFF?text=Electricity+Monitor+Screenshot+2",
      ]
    },
  ];

  const experience = [
    {
      company: "Myle-Africa",
      role: "Intern Full Stack Developer",
      period: "2025",
      achievements: [
        "Constructed a mail server using Dovecot and Postfix, integrating it with a webmail client.",
        "Architected a new component library that was adopted across 5 distinct products.",
        "Enhanced mail server security by implementing fail2ban, fail2web, and SpamAssassin.",
        "Developed a feature enabling users to send and receive emails using their custom domain names.",
        "Collaborated with the team to design and implement a web interface for managing email accounts.",
      ],
    },
  ];

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  // Functions to handle project dialog
  const handleOpenProjectDialog = (project) => {
    setSelectedProject(project);
    setOpenProjectDialog(true);
  };

  const handleCloseProjectDialog = () => {
    setOpenProjectDialog(false);
    setSelectedProject(null);
  };

  // Helper for animated sections using react-intersection-observer and MUI transitions
  const AnimatedSection = ({ children, id, direction = 'up', threshold = 0.1 }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: threshold,
    });

    return (
      <Box id={id} ref={ref} sx={{ py: { xs: 8, md: 10 } }}>
        <Slide direction={direction} in={inView} mountOnEnter unmountOnExit timeout={1000}>
          <Box>{children}</Box>
        </Slide>
      </Box>
    );
  };

  const AnimatedContent = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    return (
      <Box ref={ref}>
        <Fade in={inView} style={{ transitionDelay: `${delay}ms` }} timeout={1000}>
          <Box>{children}</Box>
        </Fade>
      </Box>
    );
  };

  return (
    <Box sx={{ backgroundColor: 'grey.50', minHeight: '100vh' }}>
      {/* Navigation */}
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 3 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}
          >
            <Link
              href="#"
              underline="none"
              color="inherit"
              onClick={() => scrollToSection("home")}
            >
              {personalInfo.name}
            </Link>
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color: activeSection === item ? "primary.main" : "text.secondary",
                    textTransform: 'capitalize',
                    fontWeight: activeSection === item ? 'bold' : 'normal',
                    position: 'relative', // For underline effect
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeSection === item ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                    "&:hover": {
                      color: "primary.main",
                      bgcolor: 'transparent'
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold' }}>
            {personalInfo.name}
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <Button
                  fullWidth
                  onClick={() => scrollToSection(item)}
                  sx={{
                    textAlign: "center",
                    textTransform: 'capitalize',
                    py: 1.5,
                    color: activeSection === item ? "primary.main" : "text.primary",
                    fontWeight: activeSection === item ? 'bold' : 'normal',
                    bgcolor: activeSection === item ? 'primary.light' : 'transparent',
                    "&:hover": {
                      bgcolor: 'grey.100'
                    }
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Hero Section */}
      <AnimatedSection id="home" direction="right" threshold={0.3}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 16 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid  item xs={12} md={6}>
              <AnimatedContent>
                <Typography variant={isMobile ? "h4" : "h3"} component="h1" gutterBottom sx={{ fontWeight: 'extrabold', color: 'primary.dark' }}>
                  Hi, I'm <Typography component="span" variant="inherit" color="primary.main">{personalInfo.name}</Typography>
                </Typography>
                <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 'medium' }}>
                  {personalInfo.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                  {personalInfo.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ChevronRightIcon />}
                    onClick={() => scrollToSection("projects")}
                    sx={{ borderRadius: 8, boxShadow: 3, "&:hover": { transform: 'scale(1.05)', transition: '0.3s' } }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={() => scrollToSection("contact")}
                    sx={{ borderRadius: 8, boxShadow: 3, "&:hover": { transform: 'scale(1.05)', transition: '0.3s' } }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </AnimatedContent>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
              <AnimatedContent delay={300}>
                <Box
                  component="img"
                  src={personalInfo.profilePicture}
                  alt={personalInfo.name}
                  sx={{
                    width: { xs: 200, sm: 250, md: 300 },
                    height: { xs: 200, sm: 250, md: 300 },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: 8,
                    border: '4px solid',
                    borderColor: 'primary.light',
                  }}
                />
              </AnimatedContent>
            </Grid>
          </Grid>
        </Container>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" direction="right" threshold={0.3}>
        <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <AnimatedContent>
            <Typography variant={isMobile ? "h5" : "h4"} component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'text.primary' }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.1rem' } }}>
              {personalInfo.bio}
            </Typography>
            <Box sx={{
              bgcolor: 'grey.100',
              p: 3,
              borderRadius: 1,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: { xs: 2, md: 0 }
            }}>
              <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.primary', display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1, color: 'primary.main', fontSize: { xs: 20, md: 24 } }} /> {personalInfo.location}
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { color: 'primary.main', transform: 'scale(1.2)', transition: '0.3s' } }}>
                  <GitHubIcon fontSize="inherit" />
                </Link>
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { color: 'primary.main', transform: 'scale(1.2)', transition: '0.3s' } }}>
                  <LinkedInIcon fontSize="inherit" />
                </Link>
                <Link href={`mailto:${personalInfo.email}`} color="inherit" sx={{ '&:hover': { color: 'primary.main', transform: 'scale(1.2)', transition: '0.3s' } }}>
                  <EmailIcon fontSize="inherit" />
                </Link>
              </Box>
            </Box>
          </AnimatedContent>
        </Container>
      </AnimatedSection>

      {/* Skills Section - Redesigned with MUI Grid and Cards */}
      <AnimatedSection id="skills" direction="left" threshold={0.2}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
          <Typography variant={isMobile ? "h5" : "h4"} component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'text.primary' }}>
            My Expertise
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skillGroup, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AnimatedContent delay={index * 150}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      boxShadow: 4,
                      border: '1px solid',
                      borderColor: 'primary.light',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                        transition: '0.3s',
                      },
                      p: 3,
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {skillGroup.icon}
                        <Typography variant={isMobile ? "h6" : "h5"} component="h3" sx={{ ml: 2, fontWeight: 'medium', color: 'primary.dark' }}>
                          {skillGroup.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {skillGroup.techs.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            color="primary"
                            variant="outlined"
                            size="small"
                            sx={{
                              fontWeight: 'medium',
                              bgcolor: 'primary.light',
                              color: 'primary.dark',
                              borderColor: 'primary.main',
                              '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'white',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </AnimatedContent>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" direction="right" threshold={0.2}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant={isMobile ? "h5" : "h4"} component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'text.primary' }}>
            Featured Projects
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AnimatedContent delay={index * 150}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      boxShadow: 4,
                      cursor: 'pointer', // Indicate clickable
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                        transition: '0.3s',
                      },
                    }}
                    onClick={() => handleOpenProjectDialog(project)} // Open dialog on click
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant={isMobile ? "h6" : "h5"} component="h3" gutterBottom sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.techs.map((tech, techIndex) => (
                          <Chip key={techIndex} label={tech} size="small" sx={{ bgcolor: 'grey.200', color: 'text.secondary', fontWeight: 'medium' }} />
                        ))}
                      </Box>
                      {/* Removed direct link here, handled by dialog */}
                    </CardContent>
                  </Card>
                </AnimatedContent>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" direction="left" threshold={0.2}>
        <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
          <Typography variant={isMobile ? "h5" : "h4"} component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'text.primary' }}>
            Work Experience
          </Typography>
          <Box>
            {experience.map((job, index) => (
              <AnimatedContent key={index} delay={index * 150}>
                <Card
                  sx={{
                    mb: 4,
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      boxShadow: 4,
                      transition: '0.3s',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, mb: 2 }}>
                    <Typography variant={isMobile ? "h6" : "h5"} component="h3" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                      {job.role}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 1, md: 0 }, color: 'text.secondary' }}>
                      <Typography variant="body1" component="span" sx={{ fontWeight: 'medium', color: 'primary.main' }}>
                        {job.company}
                      </Typography>
                      <Typography variant="body1" component="span" sx={{ mx: 1 }}>•</Typography>
                      <Typography variant="body1" component="span">{job.period}</Typography>
                    </Box>
                  </Box>
                  <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    {job.achievements.map((achievement, achIndex) => (
                      <ListItem key={achIndex} sx={{ display: 'list-item', py: 0.5 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{achievement}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </AnimatedContent>
            ))}
          </Box>
        </Container>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" direction="right" threshold={0.3}>
        <Container maxWidth="sm" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'primary.light', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant={isMobile ? "h5" : "h4"} component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'primary.dark' }}>
            Get In Touch
          </Typography>
          <AnimatedContent>
            <Box sx={{ bgcolor: 'background.paper', p: { xs: 3, md: 5 }, borderRadius: 2, boxShadow: 4, textAlign: 'center' }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                I'm currently open for new opportunities. Feel free to reach out
                if you'd like to connect or discuss a project!
              </Typography>
              <Link
                href={`mailto:${personalInfo.email}`}
                color="primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 'medium',
                  mb: 4,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <EmailIcon sx={{ mr: 1 }} /> {personalInfo.email}
              </Link>

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                />
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                />
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  fullWidth
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  sx={{ py: 1.5, borderRadius: 8, boxShadow: 3, "&:hover": { transform: 'scale(1.01)', transition: '0.3s' } }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </AnimatedContent>
        </Container>
      </AnimatedSection>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'grey.300', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'white' }}>
                {personalInfo.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>{personalInfo.title}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, fontSize: { xs: '1.75rem', md: '2rem' } }}>
              <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { color: 'white', transform: 'scale(1.2)', transition: '0.3s' } }}>
                <GitHubIcon fontSize="inherit" />
              </Link>
              <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { color: 'white', transform: 'scale(1.2)', transition: '0.3s' } }}>
                <LinkedInIcon fontSize="inherit" />
              </Link>
              <Link href={`mailto:${personalInfo.email}`} color="inherit" sx={{ '&:hover': { color: 'white', transform: 'scale(1.2)', transition: '0.3s' } }}>
                <EmailIcon fontSize="inherit" />
              </Link>
            </Box>
          </Box>
          <Typography variant="body2" align="center" sx={{ mt: 4, color: 'grey.500' }}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </Typography>
        </Container>
      </Box>

      {/* Project Detail Dialog */}
      <Dialog
        open={openProjectDialog}
        onClose={handleCloseProjectDialog}
        maxWidth="md"
        fullWidth
        scroll="paper" // Content can scroll if too long
      >
        {selectedProject && (
          <Box>
            <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                {selectedProject.title}
              </Typography>
              <IconButton
                aria-label="close"
                onClick={handleCloseProjectDialog}
                sx={{
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ p: 0 }}> {/* No padding here, handle in inner Box */}
              <Box sx={{ width: '100%', height: { xs: 200, sm: 300, md: 400 }, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={selectedProject.image}
                  alt={selectedProject.title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box sx={{ p: { xs: 2, md: 4 } }}> {/* Inner padding for content */}
                <Typography variant="body1" sx={{ mt: 2, mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                  {selectedProject.description}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>Technologies Used:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                  {selectedProject.techs.map((tech, index) => (
                    <Chip key={index} label={tech} color="secondary" variant="filled" sx={{ fontWeight: 'medium' }} />
                  ))}
                </Box>

                {selectedProject.sampleImages && selectedProject.sampleImages.length > 0 && (
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>Sample Screenshots:</Typography>
                    <Grid container spacing={2}>
                      {selectedProject.sampleImages.map((imgSrc, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <img
                            src={imgSrc}
                            alt={`${selectedProject.title} Sample ${index + 1}`}
                            style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: { xs: 2, md: 3 }, justifyContent: 'flex-start', gap: 2 }}>
              {selectedProject.githubLink && (
                <Button
                  variant="contained"
                  color="primary"
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  sx={{ borderRadius: 8 }}
                >
                  GitHub
                </Button>
              )}
              {selectedProject.liveLink && (
                <Button
                  variant="outlined"
                  color="primary"
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<OpenInNewIcon />}
                  sx={{ borderRadius: 8 }}
                >
                  Live Demo
                </Button>
              )}
              <Button onClick={handleCloseProjectDialog} color="secondary" sx={{ borderRadius: 8 }}>
                Close
              </Button>
            </DialogActions>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}