"use client"

import { AppBar, Box, Button, Link, Switch, Toolbar, styled, useTheme } from "@mui/material";
import React from 'react';
import SearchBar from "@/app/component/navbar/SearchBar";
import HorizontalList from "@/app/component/navbar/HorizontalList";
import globalTheme from "../depricate/customTheme/CustomTheme";

const Logo = styled('img')({
    height: '30px',
    marginRight: '10px',
    marginLeft: '20px',
});

const Separator = styled('span')({
    marginLeft: '10px',
    marginRight: '10px',
});



export default function Navbar(){
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        console.log(checked)

        if (checked){
            globalTheme.palette.mode = "dark"
            console.log(globalTheme.palette.mode)
        }else{
            globalTheme.palette.mode = "light"
            console.log(globalTheme.palette.mode)
        }

    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
                        <Link href="/">
                            <Logo src="logo.svg" alt="Logo" />
                        </Link> 
                    </Box>
                    <HorizontalList />

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', marginLeft: 'auto'}}>
                    <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            />
                        <SearchBar />
                        <Separator>|</Separator>
                        <Button variant="contained" href="signin" color="custom"> Sing in</Button>
                        <Separator>|</Separator>
                        <Button variant="contained" href="signup"> Sing up</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};


