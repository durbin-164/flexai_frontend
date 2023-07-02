"use client"

import React from 'react';
import {Avatar, Box, Container, FormControlLabel, Grid, TextField, Typography, Checkbox, Button, Link} from '@mui/material';
import  LockOutlinedIcon  from '@mui/icons-material/LockOutlined';



export default function Signup() {
    return (
        <Box
            sx={{
                bgcolor: "#C9F080",
                flexGrow: 1,
                // height: "100vh",
                overflow: "auto",
                // width: "100vw"
            }}
        >
            <Container 
                component="main"
                maxWidth="xs"
                // sx={{
                //     bgcolor: "#48C914",
                // }}
           
            >

                <Box 
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Avatar sx={{mt: {xs:1, md: 10},m:1, bgcolor: "#E8158F"}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" >Sign up</Typography>
                    <Box component="form" sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name='firstName'
                                    id="firstName"
                                    label="First Name"
                                    autoComplete="given-name"
                                    autoFocus
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name='lastName'
                                    id="lastName"
                                    label="Last Name"
                                    autoComplete="family-name"
                                    autoFocus
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name='email'
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    autoFocus
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name='password'
                                    id="password"
                                    label="Password"
                                    autoComplete="new-password"
                                    type='password'
                                    autoFocus
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />

                            </Grid>
                        </Grid>

                        <Button 
                            type='submit' 
                            fullWidth
                            variant='contained'
                            sx={{mt:3, mb:2}}
                        >
                            Sign Up
                        </Button>

                        <Grid container justifyContent="flex-end" sx={{mb:3}}>
                            <Grid>
                                <Link href='signin'  variant='body2'>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

