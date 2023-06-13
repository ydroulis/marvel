import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 100px;
    padding: 20px;

    width: 100%;
    height: 1130px;

    display: flex;
    flex-direction: column;

    position: relative;
    margin-bottom: 60px;

    @media (min-width: 450px) {
        height: 1430px;
    }

    @media (min-width: 590px) {
        height: 1680px;
    }

    @media (min-width: 700px) {
        height: 930px;
    }

    @media (min-width: 900px) {
        height: 800px;
    }
`