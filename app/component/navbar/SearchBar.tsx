"use client"

import { useState, ChangeEvent, MouseEvent } from 'react';
import { Box, InputBase, IconButton, ThemeProvider, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/system';

const theme = createTheme({
    palette: {
        background: {
            default: '#fff',
        },
    },
});

const StyledSearchBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    // borderRadius: theme.shape.borderRadius,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#ccc',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
    '&:hover, &:focus-within': {
        backgroundColor: '#f0f0f0',
    },
    borderRadius: '20px',
    height: '36px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    flex: 1,
    height: '100%',
    '& input': {
        paddingTop: '6px',
    },
    '&:focus': {
        outline: 'none',
    },
}));

export default function SearchBar(): JSX.Element {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('Search:', searchValue);
    };

    const handleClearSearch = () => {
        setSearchValue('');
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledSearchBox>
                <IconButton aria-label="search" onClick={handleSearch} size="small">
                    <SearchIcon />
                </IconButton>
                <StyledInputBase
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                {searchValue && (
                    <IconButton
                        aria-label="clear"
                        onClick={handleClearSearch}
                        size="small"
                    >
                        <ClearIcon />
                    </IconButton>
                )}
            </StyledSearchBox>
        </ThemeProvider>
    );
}
