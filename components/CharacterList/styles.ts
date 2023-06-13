import styled from 'styled-components';

export const ListContainer = styled.ul`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;

    position: absolute;
    left: 0px;
    top: 100px;

    @media (min-width: 620px) {
        max-width: 550px;

        left: 50%;
        transform: translateX(-50%);
    }


     @media (min-width: 830px) {
        max-width: 650px;
    }

    @media (min-width: 900px) {
        max-width: 800px;
    }
`