import { AppBar, List, styled } from "@mui/material";

export const StyledAppBer = styled(AppBar)(() =>({
    
}));

export const AppBarList = styled(List)(({ type }:{type: string}) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));