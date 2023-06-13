import styled from 'styled-components';

export const LoadingContainer = styled.div`
    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    text-align: center;

    margin-top: 50px;

    span{
        color: ${props => props.theme.colors.primary}; 
    }
`