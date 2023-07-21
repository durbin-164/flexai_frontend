import { Button, Divider, IconButton, Stack, Toolbar } from "@mui/material";
import { StyledAppBar } from "../../style/navbar";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeModeEnum } from "../../constant/enums";
import { ReactComponent as Logo } from '../../asset/logo.svg';
import UserMenu from "./UserMenu";
import { toggleUiMode } from "../../redux/slices/uiModeSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";


export default function DesktopNavbar(){
    const themeMode = useAppSelector((state: RootState) => state.uiMode);
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        dispatch(toggleUiMode());
      };

      
    return (
        <StyledAppBar>
            <Toolbar variant="dense">
                <IconButton href="/" >
                    <Logo style={{ width: 100, height: 30 }}/>
                </IconButton>
                
                <Stack 
                    direction="row" 
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={3}
                    marginLeft={4}
                    >
                    <Button href="/image" color="inherit">Image</Button>
                    <Button href="/pdf" color="inherit">PDF</Button>
                </Stack>
                
                <IconButton onClick={handleToggle}
                    sx={{ 
                        marginLeft:"auto"
                    }}
                 >
                    {themeMode === ThemeModeEnum.Light ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
                   
                <UserMenu/>
            </Toolbar>
        </StyledAppBar>
    );
}