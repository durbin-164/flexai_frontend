"use client"

import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

export default function Signin(){
    return(
        <Box
            // sx={{
            //     bgcolor: "#C9F080",
            //     // height: "100vh",
            //     overflow: "auto",
            //     // width: "100vw"
            // }}
            >

            <Container 
                component="main" 
                maxWidth="xs"
                >
                    <Box 
                        sx={{
                            
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{mt: {xs:1, md: 10},m:1, bgcolor: "#E8158F"}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">Sign in</Typography>
                        <Box component="form" sx={{mt:1}}>
                
                            <TextField
                                margin="normal"
                                id="email"
                                name="email"
                                label="Email"
                                autoComplete="new-email"
                                fullWidth
                                autoFocus
                                required
                            >

                            </TextField>
                        
                            <TextField
                                margin="normal"
                                id="password"
                                name="password"
                                label="Password"
                                autoComplete="new-password"
                                type="password"
                                fullWidth
                                autoFocus
                                required
                            >

                            </TextField>
                        
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            

                            <Button
                                color="primary"
                                variant="contained"
                                fullWidth
                            >
                                Sign in
                            </Button>

                            <Grid container sx={{m:2}}>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot Password?

                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Link href="signup" variant="body2">
                                        {"Don't have an account? Sign Up"}

                                    </Link>
                                </Grid>
                                
                            </Grid>
                        </Box>
                    </Box>
            </Container>
         </Box>
    )
};