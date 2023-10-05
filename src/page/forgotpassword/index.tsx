import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";

export default function ForgotPassword() {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    // Add your password reset logic here
  };

  return (
    <Container maxWidth="xs" 
      sx={{ display: "flex",
            alignItems: "center", 
            flexDirection: "column",
            marginTop: 8 }}
    >

      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>

      <Typography component="h1" variant="h5">
        Forgot Password
      </Typography>

      <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 2 }}>
        <TextField
            autoComplete="email"
            fullWidth
            required
            autoFocus
            id="email"
            name = "email"
            label="Email"
            type="email"
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2}}>
          Reset Password
        </Button>

        <Link href="/login" variant="body2" display="flex" marginTop={2}>
          Back to login
        </Link>
      </Box>
    </Container>
  );
}
