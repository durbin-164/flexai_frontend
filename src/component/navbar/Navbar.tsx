import { useMediaQuery, useTheme } from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar(){

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        matches ? <MobileNavbar/> : <DesktopNavbar/>
    );
}