import styled from "styled-components";

export const CardContainer = styled.li`
    width: 150px;
    height: 100px;

    list-style: none;

    position: relative;

    border: ${props => `2px #851114 solid`}; 

    border-radius: 8px;

    overflow: hidden;

    img{
        width: 100%;
    }
`

export const CharacterName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 28px;

    position: absolute;
    bottom: 0px;

    background: #851114;

    color: #C5C8CD;
`