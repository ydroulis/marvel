import React from 'react';
import { CircularProgress } from '@mui/material';
import * as S from './styles';

interface LoadingProps {
    message: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
    return (
        <S.LoadingContainer>
            <CircularProgress />
            {message}
        </S.LoadingContainer>
    );
}

export default Loading;