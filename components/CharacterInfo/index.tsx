import React from 'react';
import * as S from './styles';
import { BookOpen, YoutubeLogo } from '@phosphor-icons/react';
import { ICharacter } from '@/types/Character';
import { IComic } from '@/types/Comic';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CharacterInfoProps {
    character: ICharacter,
    comics: IComic[] | undefined
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character, comics }) => {
    return (
        <S.CharacterInfoContainer>
            <S.ValueInfo>
                <S.Comics>
                    <p>Quadrinhos</p>
                    <S.Info>
                        <BookOpen size={50} />
                        <p>{character && character.comics.available}</p>
                    </S.Info>
                </S.Comics>
                <S.Events>
                    <p>Eventos</p>
                    <S.Info>
                        <YoutubeLogo size={50} />
                        <p>{character && character.events.available}</p>
                    </S.Info>
                </S.Events>
            </S.ValueInfo>

            <S.LastComic>
                <p>último quadrinho:</p>
                <p>
                    {comics && format(parseISO(comics[0].dates[0].date), 'dd MMM, yyyy', { locale: ptBR })}
                </p>
            </S.LastComic>
        </S.CharacterInfoContainer>
    );
}

export default CharacterInfo;