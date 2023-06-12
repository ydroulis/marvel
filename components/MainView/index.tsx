import React from 'react';
import { Inter } from 'next/font/google'
import * as S from './styles';

interface MainViewProps {
    children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

function MainView({ children }: MainViewProps) {
    return (
        <S.MainContainer className={inter.className}>
            {children}
        </S.MainContainer>
    );
}

export default MainView;