import React from 'react';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import * as S from './styles';

function SearchInput() {
    const themeContext = useTheme();

    return (
        <S.InputContainer>
            <Paper
                onSubmit={() => { }}
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Encontre seu herói preferido"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton onClick={() => { }} type="button" sx={{ p: '10px' }} aria-label="search">
                    <MagnifyingGlass size={32} color={themeContext?.colors.primary} />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
        </S.InputContainer>
    );
}

export default SearchInput;