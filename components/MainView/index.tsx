import React, { useState, useEffect, ChangeEvent } from 'react';
import { Inter } from 'next/font/google'
import SearchInput from '../SearchInput';
import CharacterCard from '../CharacterCard';
import { getCharacters } from '@/api/character';
import CharacterList from '../CharacterList';
import Pagination from '../Pagination';
import Loading from '../Loading';
import { ICharacter } from '@/types/Character';
import * as S from './styles';

const limit = 12;

const inter = Inter({ subsets: ['latin'] });

const MainView: React.FC = () => {
    const [characterList, setCharacterList] = useState<ICharacter[]>();
    const [totalCharacter, setTotalCharacter] = useState(0);
    const [offset, setOffset] = useState(0);
    const [nameStartsWith, setNameStartsWith] = useState('');

    useEffect(() => {
        const loadCharacters = async () => {
            const response = await getCharacters(offset, limit, nameStartsWith);
            setTotalCharacter(response.total)
            setCharacterList(response.results);
        }

        loadCharacters();
    }, [offset, nameStartsWith]);

    function handleSearch(evt: ChangeEvent<HTMLInputElement>) {
        const { value } = evt.target
        if (value.length >= 3) {
            setNameStartsWith(value)
        } else {
            setNameStartsWith('')
        }
    }

    return (
        <S.MainContainer className={inter.className}>
            <h1>A maior biblioteca dos maiores personagens do multiverso</h1>
            <SearchInput onChange={handleSearch} />
            <CharacterList>
                {characterList && !characterList.length ? (
                    <Loading message='Buscando heróis... Aguarde um momento. Caso esteja demorando muito certifique-se de que escreveu corretamente.' />
                ) : (
                    <>

                        {characterList && characterList.map((character: ICharacter, i: number) => {
                            return <CharacterCard key={i} character={character && character} />
                        })}

                    </>
                )}
            </CharacterList>
            <Pagination limit={limit} offset={offset} total={totalCharacter} setOffset={setOffset} />
        </S.MainContainer>
    );
}

export default MainView;