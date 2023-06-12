import React from 'react';
import { Inter } from 'next/font/google'
import Switch from 'react-switch';
import { useTheme } from 'styled-components';
import { Moon, Sun } from '@phosphor-icons/react';
import * as S from './styles';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

interface HeaderProps {
    toggleTheme(): void;
}

function Header({ toggleTheme }: HeaderProps) {
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
                    offColor={themeContext?.colors.switch}
                    onColor={themeContext?.colors.switch}
                />
                <Sun size={32} />
            </S.ThemeSwitcher>
        </S.HeaderContainer>
    );
}

export default Header;