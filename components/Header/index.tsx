import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Switch from 'react-switch';
import { Moon, Sun } from '@phosphor-icons/react';
import light from '@/styles/theme/light';
import dark from '@/styles/theme/dark';
import * as S from './styles';
import ThemeHandlerContext from '../../context/ThemeHandlerContext';

const Header: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeHandlerContext);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <S.HeaderContainer>
            <Link href={'/'}>
                <Image src='/images/Logo.png' width={105} height={45} alt='Marvel logo' />
            </Link>            <S.ThemeSwitcher>
                <Sun size={32} />
                <Switch
                    onChange={toggleTheme}
                    checked={theme.title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    offColor='#7B7C81'
                    onColor='#7B7C81'
                />
                <Moon size={32} />
            </S.ThemeSwitcher>
        </S.HeaderContainer>
    );
}

export default Header;