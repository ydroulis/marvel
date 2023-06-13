import React, { ChangeEvent } from 'react';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import * as S from './styles';

interface SearchInputProps {
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void

}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {

    return (
        <S.InputContainer>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Encontre seu herói preferido"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={onChange}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
        </S.InputContainer>
    );
}

export default SearchInput;