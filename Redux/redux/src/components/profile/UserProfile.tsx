import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent, Typography, CircularProgress, Avatar, Box } from "@mui/material";
import useFetchUser from "./useFetchUser"; // ✅ Import the custom hook

const UserProfile: React.FC = () => {
  const { username } = useParams();
  const { user, loading, error } = useFetchUser(username);

  if (loading) return <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />;
  if (error) return <Navigate to="/404" />; // ✅ Redirect if user not found

  return (
    <Card
      sx={{
        maxWidth: 450,
        mx: "auto",
        mt: 5,
        p: 3,
        borderRadius: 3,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Soft shadow effect
        background: "linear-gradient(to right, #8360c3, #2ebf91)", // Gradient background
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Profile Avatar */}
      <Avatar
        src={`https://i.pravatar.cc/150?u=${user?.email}`} // ✅ Generates a unique image
        alt={user?.name}
        sx={{
          width: 100,
          height: 100,
          mx: "auto",
          mb: 2,
          border: "3px solid white",
        }}
      />

      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {user?.name}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          @{user?.username}
        </Typography>

        <Box sx={{ mt: 2, p: 2, borderRadius: 2, bgcolor: "rgba(255, 255, 255, 0.2)" }}>
          <Typography>Email: {user?.email}</Typography>
          <Typography>Website: {user?.website}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
