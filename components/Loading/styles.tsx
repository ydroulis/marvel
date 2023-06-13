import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    color: ${props => props.theme.colors.primary};
    font-weight: bold;

    margin-top: 50px;

    span{
        color: ${props => props.theme.colors.primary}; 
    }
`