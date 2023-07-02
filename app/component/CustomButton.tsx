"use client"

import { Button } from '@mui/material';

export default function CustomButton({ text, onClick }: { text: string; onClick?: () => void }): JSX.Element {
    return (
        <Button
            variant="contained"
            style={{
                backgroundColor: '#2196f3', // Blue color
                color: '#fff', // Text color
                fontWeight: 'bold', // Make the text more bold
            }}
            sx={{
                '&:hover': {
                    backgroundColor: '#1976d2', // Darker shade of blue on hover
                },
            }}
            onClick={onClick} // Pass the onClick prop to the Button component
        >
            {text}
        </Button>
    );
}

