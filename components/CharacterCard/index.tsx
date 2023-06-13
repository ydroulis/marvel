import React from 'react';
import * as S from './styles';
import Image from 'next/image';

interface CharacterCardProps {
    character: {
        name: string;
        thumbnail: {
            path: string;
            extension: string
        }
    }
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <S.CardContainer>
            <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} alt='spiderman' />
            <S.CharacterName>
                <p>{character.name}</p>
            </S.CharacterName>
        </S.CardContainer>
    );
}

export default CharacterCard;