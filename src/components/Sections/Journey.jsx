import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { CalendarMonth, LocationOn, Work, Event } from "@mui/icons-material";
import { experience } from "../../data/experienceData";
import { events } from "../../data/eventsData";

const Journey = () => {
  return (
    <Box id="journey" sx={{ py: { xs: 6, md: 8 }, background: "#fafafa" }}>
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
            Background
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              fontSize: { xs: "1.75rem", md: "2rem" },
              mb: 1,
            }}
          >
            Experience & Learning
          </Typography>
        </Box>

        {/* Experience Cards - 3 Columns */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: "#1a1a1a",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Work sx={{ color: "#6366f1", fontSize: 20 }} />
            Work Experience
          </Typography>

          <Grid container spacing={3}>
            {experience.map((exp, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "#fff",
                    borderRadius: "12px",
                    border: "1px solid #e5e5e5",
                    height: "100%",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#d4d4d4",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#1a1a1a",
                        mb: 0.5,
                        fontSize: "0.95rem",
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6366f1",
                        fontWeight: 500,
                        mb: 1.5,
                        fontSize: "0.85rem",
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Box
                      sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                    >
                      <Chip
                        icon={
                          <CalendarMonth sx={{ fontSize: "12px !important" }} />
                        }
                        label={exp.period}
                        size="small"
                        sx={{
                          background: "#f5f5f5",
                          color: "#525252",
                          fontSize: "0.7rem",
                          height: "22px",
                          "& .MuiChip-icon": { color: "#737373" },
                        }}
                      />
                      <Chip
                        icon={
                          <LocationOn sx={{ fontSize: "12px !important" }} />
                        }
                        label={exp.location}
                        size="small"
                        sx={{
                          background: "#f5f5f5",
                          color: "#525252",
                          fontSize: "0.7rem",
                          height: "22px",
                          "& .MuiChip-icon": { color: "#737373" },
                        }}
                      />
                    </Box>
                    <Box
                      component="ul"
                      sx={{ pl: 2, color: "#525252", mb: 2, listStyle: "disc" }}
                    >
                      {exp.achievements
                        .slice(0, 3)
                        .map((achievement, achIndex) => (
                          <Typography
                            component="li"
                            key={achIndex}
                            sx={{
                              mb: 0.5,
                              lineHeight: 1.5,
                              fontSize: "0.8rem",
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            background: "#1a1a1a",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: "0.65rem",
                            height: "20px",
                            fontFamily: "monospace",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Events Section */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: "#1a1a1a",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Event sx={{ color: "#6366f1", fontSize: 20 }} />
            Events & Learning
          </Typography>

          <Grid container spacing={3}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "#fff",
                    borderRadius: "12px",
                    border: "1px solid #e5e5e5",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#d4d4d4",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#1a1a1a",
                          flex: 1,
                          pr: 1,
                          fontSize: "0.9rem",
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Chip
                        label={event.type}
                        size="small"
                        sx={{
                          background: "rgba(99, 102, 241, 0.1)",
                          color: "#6366f1",
                          fontWeight: 500,
                          fontSize: "0.65rem",
                          height: "20px",
                        }}
                      />
                    </Box>
                    <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
                      <Typography
                        sx={{ color: "#737373", fontSize: "0.75rem" }}
                      >
                        {event.date}
                      </Typography>
                      <Typography
                        sx={{ color: "#a3a3a3", fontSize: "0.75rem" }}
                      >
                        •
                      </Typography>
                      <Typography
                        sx={{ color: "#737373", fontSize: "0.75rem" }}
                      >
                        {event.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {event.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            background: "#1a1a1a",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: "0.6rem",
                            height: "18px",
                            fontFamily: "monospace",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Journey;
