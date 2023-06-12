import React from 'react';
import * as S from './styles';

interface CharacterListProps {
    children: React.ReactNode
}

function CharacterList({ children }: CharacterListProps) {
    return (
        <S.ListContainer>
            {children}
        </S.ListContainer>
    );
}

export default CharacterList;