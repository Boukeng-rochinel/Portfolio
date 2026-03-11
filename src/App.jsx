import React from "react";
import { Box, Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

// Layout Components
import Navigation from "./components/Layout/Navigation";
import ScrollToTop from "./components/Layout/ScrollToTop";

// Section Components
import Hero from "./components/Sections/Hero";
import Companies from "./components/Sections/Companies";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Journey from "./components/Sections/Journey";
import Contact from "./components/Sections/Contact";

// Footer
import Footer from "./components/Layout/Footer";

const App = () => {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Companies", id: "companies" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "projects" },
    { name: "Experience", id: "journey" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        background: "#ffffff",
        minHeight: "100vh",
        color: "#1a1a1a",
        fontFamily: '\"Inter\", \"Segoe UI\", sans-serif',
      }}
    >
      <Navigation navItems={navItems} scrollToSection={scrollToSection} />

      <Hero scrollToSection={scrollToSection} />
      <Companies />
      <Skills />
      <Projects />
      <Journey />
      <Contact />

      <Footer />

      <ScrollToTop>
        <Fab
          size="medium"
          sx={{
            background: "#1a1a1a",
            color: "#fff",
            "&:hover": {
              background: "#333",
            },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </ScrollToTop>
    </Box>
  );
};

export default App;
