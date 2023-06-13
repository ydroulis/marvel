import React from 'react';
import * as S from './styles';
import { ICharacter } from '@/types/character';

interface CharacterProfileProps {
    character: ICharacter
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({ character }) => {
    return (
        <S.CharacterProfileContainer>
            <S.MainInfo>
                <img
                    src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
                    alt={character && character.name}
                />
                <h1>{character && character.name}</h1>
            </S.MainInfo>
            <S.Description>
                <p>
                    {character && character.description}
                </p>
            </S.Description>
        </S.CharacterProfileContainer>
    );
}

export default CharacterProfile;