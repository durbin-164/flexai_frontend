import { useNavigate } from 'react-router-dom';
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { SignupDataInternal,SignupDataExternal, signupUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import PasswordField from '../../component/common/password-field';
import { AuthProviderEnum } from '../../constant/enums';

export default function Signup(){
    const dispatch = useAppDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState<string| null>(null)

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleGoogleSignup = async (credential: CredentialResponse) =>{
        console.log(credential)
        const userData: SignupDataExternal ={
            provider:AuthProviderEnum.GOOGLE,
            token: credential?.credential as string
        }
        await handleSingup(userData)
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData: SignupDataInternal = {
            provider: AuthProviderEnum.INTERNAL,
            first_name: data.get("firstName") as string,
            last_name: data.get("lastName") as string,
            email: data.get('email') as string,
            password: data.get('password') as string,
          };

          await handleSingup(userData)
      };

    const handleSingup = async(userData: SignupDataInternal | SignupDataExternal) =>{
        try {
            // Dispatch the signupUser action using unwrapResult
            const action = await dispatch(signupUser(userData));
            // The following code will only execute if the signup is successful
            // Redirect to the homepage
            const user = unwrapResult(action);
            console.log('user', user);
            navigate("/"); // Replace '/' with the path of your homepage route
          } catch (error) {
            setError(error as string)
          }
    }


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
            {error?<Typography component="h1" variant="h5" color="error">{error}</Typography>: null}

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
                        <PasswordField
                            showPassword={showPassword}
                            handleClickShowPassword={handleClickShowPassword}
                            handleMouseDownPassword={handleMouseDownPassword}
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt:2, mb:2}}
                >
                    Sign up
                </Button>
                
                <GoogleLogin
                    text='signup_with'
                    context='signup'
                    onSuccess={handleGoogleSignup}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />

                <Link href="/login" variant="body2" justifyContent="flex-end" display="flex" marginTop={2}>
                    Already have an account? Login
                </Link>
            </Box>
        </Container>
    )
}