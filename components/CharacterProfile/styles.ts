import styled from 'styled-components';

export const CharacterProfileContainer = styled.section`

`

export const MainInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img{
        width: 150px;
        height: 150px;
        
        border: #851114 solid 1px;
        border-radius: 10px;
    }

    @media (min-width: 900px) {
        flex-direction: column;

        img{
            width: 400px;
            height: 400px;
        }
    }

`

export const Description = styled.div`
    margin-top: 16px;

    p{
        font-size: 16px;

        @media (min-width: 680px) {
            font-size: 18px;
        }

        @media (min-width: 900px) {
            font-size: 22px;
        }
    }
`