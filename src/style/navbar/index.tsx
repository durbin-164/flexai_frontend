import { AppBar, List, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(() =>({
    // position:'static'
    
}));

export const AppBarList = styled(List)(({ type }:{type: string}) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));