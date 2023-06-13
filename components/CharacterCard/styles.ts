import styled from "styled-components";

export const CardContainer = styled.li`
    width: 150px;
    height: 150px;

    list-style: none;

    position: relative;

    border: ${props => `2px #851114 solid`}; 

    border-radius: 8px;

    overflow: hidden;

    @media (min-width: 450px) {
        width: 195px;
        height: 195px;
    }

    @media (min-width: 490px) {
        width: 200px;
        height: 200px;
    }

    @media (min-width: 590px) {
        width: 240px;
        height: 240px;
    }

    @media (min-width: 700px) {
        width: 175px;
        height: 175px;
    }

    @media (min-width: 900px) {
        width: 190px;
        height: 190px;
    }

    img{
        width: 100%;
        height: 100%;
    }
`

export const CharacterName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 34px;

    position: absolute;
    bottom: 0px;

    background: #851114;

    color: #C5C8CD;

    p{
        text-align: center;
        font-size: 12px;
    }

    @media (min-width: 450px) {
        height: 40px;
        
        p{
            font-size: 16px;
        }
    }
`