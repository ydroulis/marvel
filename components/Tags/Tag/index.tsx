import React from 'react';
import * as S from './styles';
import { X } from '@phosphor-icons/react';

interface TagProps {
    children: React.ReactNode;
    closeAction: () => void
}

const Tag: React.FC<TagProps> = ({ children, closeAction }) => {
    return (
        <S.TagContainer>
            {children}
            <X size={25} onClick={() => closeAction()} />
        </S.TagContainer>
    );
}

export default Tag;