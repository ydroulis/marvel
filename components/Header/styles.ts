import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 30px;

    position: fixed;
`

export const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`