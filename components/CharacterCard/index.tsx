import React, { useContext } from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
import { ICharacter } from '../../types/Character';
import CharacterContext from '@/context/CharacterContext';


interface CharacterCardProps {
    character: ICharacter
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const router = useRouter()
    const { setCharacter } = useContext(CharacterContext);

    const handleRedirect = () => {
        setCharacter(character);
        router.push('/character');
    }

    return (
        <S.CardContainer onClick={() => handleRedirect()}>
            <img
                src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
                alt={character.name} />
            <S.CharacterName>
                <p>{character.name}</p>
            </S.CharacterName>
        </S.CardContainer>
    );
}

export default CharacterCard;