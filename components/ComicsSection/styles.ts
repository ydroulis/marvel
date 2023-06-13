import styled from 'styled-components';

export const ComicsSectionContainer = styled.section`
    margin-top: 24px;
`

export const ComicList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    margin-top: 24px;

    li{
        width: 100px;

        display: flex;
        flex-direction: column;
        align-items: center;

        list-style: none;

        @media (min-width: 380px) {
            width: 150px;
        }

        @media (min-width: 520px) {
            width: 200px;
        }
    }

    li img{
        width: 70px;
        height: 100px;

        @media (min-width: 680px) {
            width: 200px;
            height: 300px;
        }
    }

    li p {
        text-align: center;
        font-size: 16px;
        font-weight: bold;

        margin-top: 10px;

        @media (min-width: 680px) {
            font-size: 18px;
        }

        @media (min-width: 900px) {
            font-size: 22px;
        }
    }
`