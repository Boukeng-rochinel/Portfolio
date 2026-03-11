import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 8 }, background: "#fafafa" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              color: "#6366f1",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Technical Expertise
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              fontSize: { xs: "1.75rem", md: "2rem" },
              mb: 2,
            }}
          >
            Skills & Technologies
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  background: "#fff",
                  borderRadius: "12px",
                  p: 3,
                  height: "100%",
                  border: "1px solid #e5e5e5",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#d4d4d4",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      color: skill.color,
                      mr: 1.5,
                      p: 1,
                      background: `${skill.color}15`,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Settings sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#1a1a1a",
                        fontSize: "1rem",
                      }}
                    >
                      {skill.category}
                    </Typography>
                    <Typography sx={{ color: "#737373", fontSize: "0.75rem" }}>
                      {skill.years} years experience
                    </Typography>
                  </Box>
                </Box>

                {/* Tech Stack with colored backgrounds */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {skill.technologies.slice(0, 5).map((tech, techIndex) => (
                    <Box
                      key={techIndex}
                      sx={{
                        background: "#f5f5f5",
                        color: "#525252",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                        height: "26px",
                        px: 1.5,
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "monospace",
                        border: "1px solid #e5e5e5",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          background: skill.color,
                          color: "#fff",
                          borderColor: skill.color,
                        },
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>

                <Typography
                  sx={{
                    color: "#525252",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
