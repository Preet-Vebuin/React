import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const ProfileHome: React.FC = () => {
  return (
  
  <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Welcome to User Profiles</Typography>
      <Button variant="contained" sx={{ mt: 3 }} component={Link} to="/user/Bret">
        View Profile of Bret
      </Button>
    </Box>
  );
};

export default ProfileHome;
