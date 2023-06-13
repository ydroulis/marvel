import React, { useContext, useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import * as S from './styles';
import CharacterContext from '@/context/CharacterContext';
import { getCharacterComic } from '@/api/character';
import { BookOpen, YoutubeLogo } from '@phosphor-icons/react';
import { IComic } from '@/types/Comic';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ComicsSection from '../ComicsSection';
import CharacterInfo from '../CharacterInfo';
import CharacterProfile from '../CharacterProfile';
import Loading from '../Loading';

const inter = Inter({ subsets: ['latin'] });


const CharacterView: React.FC = () => {
    const [comics, setComics] = useState<IComic[]>();
    const { character } = useContext(CharacterContext);
    const validateRendering = character && comics && comics.length;

    useEffect(() => {
        const loadComics = async () => {
            const response = await getCharacterComic(character.id);
            setComics(response.results);
        }

        loadComics();
    }, [])
    return (
        <S.CharacterViewContainer className={inter.className}>
            {validateRendering ? (
                <>
                    <CharacterProfile character={character} />
                    <CharacterInfo character={character} comics={comics} />
                    <ComicsSection comics={comics} />
                </>
            ) : (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Loading message='Estamos buscando informações' />
                </div>
            )}

        </S.CharacterViewContainer>
    );
}

export default CharacterView;