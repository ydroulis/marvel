import styled from 'styled-components';

export const CharacterViewContainer = styled.main`
    margin-top: 100px;
    padding: 20px;

    width: 100%;

    display: flex;
    flex-direction: column;

    position: relative;
    margin-bottom: 60px;

    h1{
        font-size: 22px;
    }


    @media (min-width: 680px) {
        h1{
            font-size: 40px;
        }
    }

    @media (min-width: 900px) {
        padding: 40px  80px;

        h1{
            font-size: 60px;
        }
    }

`