import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import SearchInput from '../SearchInput';
import Tags from '../Tags';
import CharacterCard from '../CharacterCard';
import { useQuery } from 'react-query';
import { getCharacters } from '@/api/character';
import CharacterList from '../CharacterList';
import * as S from './styles';

interface ICharacter {
    name: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

const inter = Inter({ subsets: ['latin'] })

const MainView: React.FC = () => {
    const [filteredCharacter, setFilteredCharacter] = useState<ICharacter[]>()

    const { data, isLoading } = useQuery('characters', () => {
        return getCharacters();
    });

    const characterList = !isLoading && data.results

    return (
        <S.MainContainer className={inter.className}>
            <SearchInput characterList={characterList} setFilteredCharacter={setFilteredCharacter} />
            <Tags filteredCharacter={filteredCharacter} setFilteredCharacter={setFilteredCharacter} />
            <CharacterList>
                {isLoading ? (
                    <div>Carregando...</div>
                ) : (
                    <>
                        {filteredCharacter && filteredCharacter.length > 0 ?
                            <>
                                {filteredCharacter.map(character => {
                                    return <CharacterCard character={character && character} />
                                })}
                            </>
                            :
                            <>
                                {characterList && characterList.map((character: ICharacter) => {
                                    return <CharacterCard character={character && character} />
                                })}
                            </>
                        }
                    </>
                )}
            </CharacterList>
        </S.MainContainer>
    );
}

export default MainView;