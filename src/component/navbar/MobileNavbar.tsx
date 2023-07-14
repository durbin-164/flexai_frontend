import { Divider, IconButton, ListItem, Stack, Toolbar } from "@mui/material";
import { StyledAppBar } from "../../style/navbar";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeModeContext } from "../../context/theme";
import { ThemeModeEnum } from "../../constant/enums";
import { ReactComponent as Logo } from '../../asset/logo.svg';


export default function DesktopNavbar(){
    const {themeMode, toggleThemeMode} = useContext(ThemeModeContext)
    return (
        <StyledAppBar>
            <Toolbar>
                <IconButton>
                        <Logo style={{ width: '100px', height: '40px' }}/>
                </IconButton>


                <Stack 
                    direction="row" 
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={3}
                    margin="auto"
                    >
                        <ListItem>Image</ListItem>
                        <ListItem>PDF</ListItem>

                </Stack>

                <Stack 
                    direction="row" 
                    margin="auto"
                    >
                    <IconButton onClick={toggleThemeMode}>
                        {themeMode === ThemeModeEnum.Light ? <Brightness4 /> : <Brightness7 />}
                    </IconButton>
                </Stack>
                   
                
                <Stack
                     direction="row" 
                     divider={<Divider orientation="vertical" flexItem />}
                     spacing={3}
                     margin="auto"
                >
                    
                    <ListItem>Login</ListItem>
                    <ListItem>Signup</ListItem>
                </Stack>

            </Toolbar>
        </StyledAppBar>
    );
}