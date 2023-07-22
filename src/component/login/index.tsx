import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login(){

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          remember_me: data.get("remember_me")  // return "remember" if checked otherwise null
        });
      };

    return (
        <Container maxWidth="xs" sx={
            {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 8
                
            }
        }>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">Login</Typography>

            <Box component="form" onSubmit={handleFormSubmit} sx={{mt:2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
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
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            label="password"
                            autoComplete="password"
                            fullWidth
                            required
                            autoFocus
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            name="remember_me"
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt:2}}
                >
                    Login
                </Button>

                <Grid container marginTop={2}>
                    <Grid item xs>
                        <Link href="/forgotpassword" variant="body2"> Forgot password</Link>

                    </Grid>
                    <Grid item>
                        <Link href="/signup" variant="body2">
                            Don't have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>
                
            </Box>
        </Container>
        
    )
}