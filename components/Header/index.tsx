import React from 'react';
import Image from 'next/image';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';
import { Inter } from 'next/font/google'
import { Moon, Sun } from '@phosphor-icons/react';
import * as S from './styles';

const inter = Inter({ subsets: ['latin'] })

interface HeaderProps {
    toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    const themeContext = useTheme();

    return (
        <S.HeaderContainer className={inter.className}>
            <Image src='/images/Logo.png' width={105} height={45} alt='Marvel logo' />
            <S.ThemeSwitcher>
                <Moon size={32} />
                <Switch
                    onChange={toggleTheme}
                    checked={themeContext?.title === 'light'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    offColor='#7B7C81'
                    onColor='#7B7C81'
                />
                <Sun size={32} />
            </S.ThemeSwitcher>
        </S.HeaderContainer>
    );
}

export default Header;