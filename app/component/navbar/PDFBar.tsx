"use client"

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function PDFBar() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [hovered, setHovered] = React.useState(false);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleTextHover = () => {
        setHovered(true);
    };

    const handleTextHoverEnd = () => {
        setHovered(false);
    };

    const open = Boolean(anchorEl);

    return (
        <Box>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                onMouseOver={handleTextHover}
                onMouseOut={handleTextHoverEnd}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: hovered ? '#e8e8e8' : 'transparent',
                    transition: 'background-color 0.2s ease',
                    borderRadius: '4px',
                    p: '8px',
                    '&:hover': {
                        color: '#f00', // Change the color of "PDF" text on hover
                        '& svg': {
                            color: '#00f', // Change the color of ExpandLessIcon on hover
                        },
                    },
                }}
            >
                PDF {hovered ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Typography>

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>I use Popover.</Typography>
            </Popover>
        </Box>
    );
}

