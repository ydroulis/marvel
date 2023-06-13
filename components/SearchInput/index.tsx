import React, { Dispatch, SetStateAction, useState } from 'react';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import * as S from './styles';

interface ICharacter {
    name: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

interface SearchInputProps {
    characterList: ICharacter[] | undefined;
    setFilteredCharacter: Dispatch<SetStateAction<ICharacter[] | undefined>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ characterList, setFilteredCharacter }) => {
    const [text, setText] = useState('')
    const [sugestions, setSugestions] = useState<ICharacter[]>()
    const themeContext = useTheme();

    const onChangeHandler = (text: string) => {
        let matches: ICharacter[] | undefined = [];
        if (text.length > 0) {
            matches = characterList && characterList.filter(character => {
                const regex = new RegExp(`${text}`, "gi");
                return character.name.match(regex);
            })
        }
        setSugestions(matches)
        setText(text);
    }

    const onSugestionHandler = (text: string) => {
        setText(text);
        setSugestions([]);
    }

    const onClickSearchHandler = () => {
        const charactersFiltered = characterList && characterList.filter((obj) => obj.name === text);
        setFilteredCharacter(charactersFiltered)
        setText('');
    }

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
                    onChange={(e) => onChangeHandler(e.target.value)}
                    value={text}
                />
                <IconButton onClick={() => onClickSearchHandler()} type="button" sx={{ p: '10px' }} aria-label="search">
                    <MagnifyingGlass size={32} color={themeContext?.colors.primary} />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
            {sugestions && <div className='sugestionsList'>
                {sugestions.map(item => {
                    return (
                        <div className='sugestion' onClick={() => onSugestionHandler(item.name)}>
                            {item.name}
                        </div>
                    )
                })}
            </div>}
        </S.InputContainer>
    );
}

export default SearchInput;