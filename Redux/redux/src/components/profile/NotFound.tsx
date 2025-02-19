import React from "react";
import { Typography, Box } from "@mui/material";

const NotFound: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">The page you are looking for does not exist.</Typography>
    </Box>
  );
};

export default NotFound;
