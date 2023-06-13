import styled from 'styled-components';

export const TagContainer = styled.li`
    list-style: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    width: fit-content;
    min-width: 150px;
    height: 100%;

    border-radius: 8px;

    background: ${props => props.theme.colors.primary};

    color: ${props => props.theme.colors.secondary};
    font-size: 18px;

    padding: 10px;

    svg{
        cursor: pointer;
    }
`