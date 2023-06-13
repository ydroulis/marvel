import styled from 'styled-components';

export const PaginationContainer = styled.ul`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 26px;

    position: absolute;
    bottom: 0px;
    left: 0px;

    li{
        list-style: none;
        width: 40px;
        height: 40px;
    }

    li button{
        width: 100%;
        height: 100%;

        font-size: 18px;

        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};

        border: none;
        border-radius: 8px;
    }

    .paginationActive{
        background: ${props => props.theme.colors.active};

        font-weight: bold;
    }    
`