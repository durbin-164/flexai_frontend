import * as React from 'react';
import { List, ListItem, Stack } from "@mui/material";
import PDFBar from "@/app/component/navbar/PDFBar";

export default function HorizontalList() {
    return (
        // <List sx={{ display: 'flex' }}>
        //     <ListItem>
        //         <PDFBar />
        //     </ListItem>
        //     <ListItem>
        //         <PDFBar />
        //     </ListItem>
        //     <ListItem>
        //         <PDFBar />
        //     </ListItem>
        //     <ListItem>
        //         <PDFBar />
        //     </ListItem>
        // </List>


        <Stack direction="row" spacing={2}   sx={{ display: { xs: 'none', md: 'flex' }}} >
            <PDFBar />
            <PDFBar />
            <PDFBar />

        </Stack>
    );
}
