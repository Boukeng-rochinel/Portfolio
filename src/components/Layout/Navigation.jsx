import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

const Navigation = ({ navItems, scrollToSection }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "rgba(255, 255, 255, 0.9)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid #f0f0f0" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("about")}
          >
            BR
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "#666",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    px: 2,
                    py: 1,
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#1a1a1a",
                      background: "#f5f5f5",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#1a1a1a" }}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: "#ffffff",
            width: "100%",
            maxWidth: 300,
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#1a1a1a", fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#1a1a1a" }}
          >
            <Close />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => {
                  scrollToSection(item.id);
                  setDrawerOpen(false);
                }}
                sx={{
                  borderRadius: "12px",
                  py: 2,
                  "&:hover": {
                    background: "#f5f5f5",
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    sx: {
                      color: "#1a1a1a",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
