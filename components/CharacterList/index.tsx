import React from 'react';
import * as S from './styles';

interface CharacterListProps {
    children: React.ReactNode
}

const CharacterList: React.FC<CharacterListProps> = ({ children }) => {
    return (
        <S.ListContainer>
            {children}
        </S.ListContainer>
    );
}

export default CharacterList;