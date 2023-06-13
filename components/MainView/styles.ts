import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 100px;
    padding: 20px;

    width: 100%;
    height: 1210px;

    display: flex;
    flex-direction: column;

    position: relative;
    margin-bottom: 60px;

    h1{
        width: 300px;
        color: ${props => props.theme.colors.primary};
        text-align: center;
        font-size: 20px;

        margin: 20px auto;
    }

    @media (min-width: 450px) {
        height: 1510px;
    }

    @media (min-width: 590px) {
        height: 1760px;

        h1{
            width: 500px;

            font-size: 24px;
        }
    }

    @media (min-width: 620px) {
        height: 1800px;
    }

    @media (min-width: 700px) {
        height: 1100px;
    }

    @media (min-width: 900px) {
        height: 950px;

        h1{
            width: 700px;

            font-size: 34px;
        }
    }
`