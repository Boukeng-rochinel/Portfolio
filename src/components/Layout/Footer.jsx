import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 4, background: "#ffffff", borderTop: "1px solid #f0f0f0" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#737373" }}>
            © {new Date().getFullYear()} Boukeng Rochinel. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Link
              href="#"
              sx={{
                color: "#737373",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "#1a1a1a" },
              }}
            >
              Privacy Policy
            </Link>
            <Typography variant="body2" sx={{ color: "#a3a3a3" }}>
              Built with React & MUI
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
