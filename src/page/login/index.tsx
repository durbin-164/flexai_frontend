import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../redux/store";
import {  LoginDataExternal, LoginDataInternal, loginUser } from "../../redux/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../component/common/password-field";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { AuthProviderEnum } from "../../constant/enums";

export default function Login(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState<string| null>(null)

    const handleGoogleSignin =async (credential: CredentialResponse) =>{
        console.log(credential)
        const loginData: LoginDataExternal ={
            provider: AuthProviderEnum.GOOGLE,
            token: credential.credential as string
        }

        await handleLogin(loginData)
    }


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          remember_me: data.get("remember_me")  // return "remember" if checked otherwise null
        });

        const loginData: LoginDataInternal = {
            "provider": AuthProviderEnum.INTERNAL,
            "email": data.get("email") as string,
            "password": data.get("password") as string
        }

        await handleLogin(loginData)
      };

    const handleLogin = async (loginData: LoginDataInternal | LoginDataExternal) =>{

        try {
            // Dispatch the signupUser action using unwrapResult
            const action = await dispatch(loginUser(loginData));
            // The following code will only execute if the signup is successful
            // Redirect to the homepage
            const user = unwrapResult(action);
            console.log('user', user);
            navigate("/"); // Replace '/' with the path of your homepage route
          } catch (error) {
            console.log(error)
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
            <Typography component="h1" variant="h5">Login</Typography>
            {error?<Typography component="h1" variant="h5" color="error">{error}</Typography>: null}

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
                        <PasswordField
                            showPassword={showPassword}
                            handleClickShowPassword={handleClickShowPassword}
                            handleMouseDownPassword={handleMouseDownPassword}
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
                    sx={{mt:2, mb:2}}
                >
                    Login
                </Button>

                <GoogleLogin
                    text='signin_with'
                    context='signin'
                    onSuccess={handleGoogleSignin}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />

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
