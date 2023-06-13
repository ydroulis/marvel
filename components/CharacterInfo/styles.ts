import styled from 'styled-components';

export const CharacterInfoContainer = styled.section``


export const ValueInfo = styled.div`
    margin-top: 24px;

    display: flex;
    gap: 30px;

    color: ${props => props.theme.colors.primary};

    @media (min-width: 900px) {
        justify-content: center;
    }
`

export const Comics = styled.div`
    p{
        font-size: 12px;
        font-weight: bold;

        @media (min-width: 680px) {
            font-size: 14px;
        }

        @media (min-width: 900px) {
            font-size: 16px;
        }
    }
`

export const Events = styled.div`
    p{
        font-size: 12px;
        font-weight: bold;

        @media (min-width: 680px) {
            font-size: 14px;
        }

        @media (min-width: 900px) {
            font-size: 16px;
        }
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p{
        font-size: 18px;
        font-weight: bold;

        @media (min-width: 680px) {
            font-size: 18px;
        }

        @media (min-width: 900px) {
            font-size: 22px;
        }
    }
`

export const LastComic = styled.div`
    display: flex;
    gap: 20px;

    margin-top: 24px;

    p{
        font-size: 16px;
    }

    @media (min-width: 680px) {
        p{
            font-size: 18px;
        }
    }

    @media (min-width: 900px) {
        justify-content: center;

        p{
            font-size: 22px;
        }
    }
`