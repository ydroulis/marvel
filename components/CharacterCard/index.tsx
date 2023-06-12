import React from 'react';
import * as S from './styles';
import Image from 'next/image';

const CharacterCard: React.FC = () => {
    return (
        <S.CardContainer>
            <Image src='/images/spiderman.png' width={100} height={100} alt='spiderman' />
            <S.CharacterName>
                <p>Spiderman</p>
            </S.CharacterName>
        </S.CardContainer>
    );
}

export default CharacterCard;