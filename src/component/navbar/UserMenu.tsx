import { Notifications } from "@mui/icons-material";
import { Avatar, Badge, Button, Divider, IconButton, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { logout } from "../../redux/slices/userSlice";

interface Person {
    firstName: string;
  }


export default function UserMenu(){

    const userData = useAppSelector((state: RootState) => state.user.user)
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   
    const handleButtonCliek = (event: React.MouseEvent<HTMLButtonElement>) =>{
        setAnchorEl(event.currentTarget);
    }
    const hancleMenuClose =() =>{
        setAnchorEl(null)
    }

    const handleLogoutClick = () => {
        setAnchorEl(null)
        dispatch(logout())
    }

    const login_signup_menu = (
        <Stack
            direction="row" 
            divider={<Divider orientation="vertical" flexItem />}
            spacing={3}
            marginLeft={4}
        >
            <Button href="/login" color="inherit">Login</Button>
            <Button href="/signup" color="inherit">Signup</Button>
        </Stack>
    );

    const user_login_menu = (
        <Stack
            direction="row" 
            spacing={2}
            alignItems="flex-end"
            marginLeft={4}
        >
            <IconButton color="inherit">
                <Badge 
                    badgeContent={3} 
                    color="error" 
                >
                    <Notifications />
                </Badge>
            </IconButton>
            <Tooltip  title="Open Setting">
                <IconButton onClick={handleButtonCliek}>
                    <Avatar  sx={{ width: 30, height: 30 }}>{userData?.firstName.charAt(0).toUpperCase()}</Avatar>
                </IconButton>
            </Tooltip>
            <Menu 
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={hancleMenuClose}
            >
                <MenuItem onClick={hancleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
        </Stack>

    );

    return (
        <>
        {userData? user_login_menu : login_signup_menu}
        </>
    );
}