import React, { useState, useEffect, ChangeEvent } from 'react';
import { Inter } from 'next/font/google'
import SearchInput from '../SearchInput';
import Tags from '../Tags';
import CharacterCard from '../CharacterCard';
import { useQuery } from 'react-query';
import { getCharacters } from '@/api/character';
import CharacterList from '../CharacterList';
import * as S from './styles';
import Pagination from '../Pagination';
import Loading from '../Loading';

interface ICharacter {
    name: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

const limit = 12;

const inter = Inter({ subsets: ['latin'] })

const MainView: React.FC = () => {
    const [characterList, setCharacterList] = useState<ICharacter[]>();
    const [totalCharacter, setTotalCharacter] = useState(0);
    const [filteredCharacter, setFilteredCharacter] = useState<ICharacter[]>();
    const [offset, setOffset] = useState(0);
    const [nameStartsWith, setNameStartsWith] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadCharacters = async () => {
            setIsLoading(true)
            const response = await getCharacters(offset, limit, nameStartsWith);
            setTotalCharacter(response.total)
            setCharacterList(response.results);
        }

        loadCharacters();
        setIsLoading(false);
    }, [offset, nameStartsWith])

    function handleSearch(evt: ChangeEvent<HTMLInputElement>) {
        const { value } = evt.target
        if (value.length >= 3) {
            setNameStartsWith(value)
        } else {
            setNameStartsWith('')
        }
    }

    // if (characterList && !characterList.length) {
    //     return <Loading message='Buscando heróis... Aguarde um momento' />
    // }

    return (
        <S.MainContainer className={inter.className}>
            <h1>A maior biblioteca dos maiores personagens do multiverso</h1>
            <SearchInput onChange={handleSearch} />
            <CharacterList>
                {characterList && !characterList.length ? (
                    <Loading message='Buscando heróis... Aguarde um momento' />
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