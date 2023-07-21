import { useNavigate } from 'react-router-dom';
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { SignupData, signupUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/store';

export default function Signup(){
    const dispatch = useAppDispatch();

    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData: SignupData = {
            firstName: data.get("firstName") as string,
            lastName: data.get("lastName") as string,
            email: data.get('email') as string,
            password: data.get('password') as string,
          };

        // console.log(userData);

        dispatch(signupUser(userData));
        navigate("/");

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
            <Typography component="h1" variant="h5">Sign up</Typography>

            <Box component="form" onSubmit={handleFormSubmit} sx={{mt:2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            fullWidth
                            required
                            autoFocus
                            id="firstName"
                            name = "firstName"
                            label="First Name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="family-name"
                            fullWidth
                            required
                            autoFocus
                            id="lastName"
                            name = "lastName"
                            label="Last Name"
                        />
                    </Grid>
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
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt:2}}
                >
                    Sign up
                </Button>
                <Link href="/login" variant="body2" justifyContent="flex-end" display="flex" marginTop={2}>
                    Already have an account? Login
                </Link>
            </Box>
        </Container>
    )
}