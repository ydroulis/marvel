import React from 'react';
import { CircularProgress } from '@mui/material';
import * as S from './styles';

interface LoadingProps {
    message: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
    return (
        <S.LoadingContainer>
            {message}
            <CircularProgress />
        </S.LoadingContainer>
    );
}

export default Loading;