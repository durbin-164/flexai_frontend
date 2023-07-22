import { useNavigate } from 'react-router-dom';
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { ApiError, SignupData, signupUser } from '../../redux/slices/userSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { wait } from '@testing-library/user-event/dist/utils';
import { unwrapResult } from '@reduxjs/toolkit';

export default function Signup(){
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.user)

    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState<string| null>(null)

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData: SignupData = {
            firstName: data.get("firstName") as string,
            lastName: data.get("lastName") as string,
            email: data.get('email') as string,
            password: data.get('password') as string,
          };

        // console.log(userData);

        // try {
        //     // Dispatch the signupUser action
        //     const action = await dispatch(signupUser(userData));
      
        //     if (signupUser.fulfilled.match(action)) {
        //       // The signup is successful
        //       // You can access the returned data from the action if needed
        //       const user = action.payload; // Assuming the payload contains the user data
        //       console.log('user', user);
      
        //       // Redirect to the homepage
        //       navigate("/"); // Replace '/' with the path of your homepage route
        //     } else if (signupUser.rejected.match(action)) {
        //       // The signup action was rejected due to an error
        //       // You can access the error message from the action's error field
        //       const errorMessage = action.error.message;
        //       console.log('error', errorMessage);
        //       // Optionally, you can display the error message on the signup page
        //       // this.setState({ errorMessage });
        //     }
        //   } catch (error) {
        //     // Handle any other errors that might occur during dispatching the action
        //     console.log('error', error);
        //   }


        try {
            // Dispatch the signupUser action using unwrapResult
            const action = await dispatch(signupUser(userData));
            // The following code will only execute if the signup is successful
            // Redirect to the homepage
            const user = unwrapResult(action);
            console.log('user', user);
            navigate("/"); // Replace '/' with the path of your homepage route
          } catch (error) {
            if ( (error as ApiError).message) {
                // If the error is an API error, set the error state
                setError((error as ApiError).message);
              } else {
                // Handle other types of errors if needed
                setError(error as string)
              }
          }
        


                //     dispatch(signupUser(userData))
                // .unwrap() // Unwrap the fulfilled action, so it doesn't return a rejected promise
                // .then(() => {
                //     // The following code will only execute if the signup is successful
                //     // Redirect to the homepage
                //     navigate("/"); // Replace '/' with the path of your homepage route
                // })
                // .catch((error) => {
                //     // Handle errors, if any
                // });

        // dispatch(signupUser(userData));
        // if (!userState.apiError && !userState.loading){
        //     navigate("/");
        // }
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