import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 310px;
    position: relative;

    margin: 0 auto;

    @media (min-width: 450px) {
        width: 400px;
    }

    @media (min-width: 590px) {
        width: 500px;
    }

    @media (min-width: 700px) {
        width: 550px;
    }

    @media (min-width: 900px) {
        width: 800px;
    }

    form {
        width: 100%;
        border: ${props => `2px ${props.theme.colors.primary} solid`}; 
        border-radius: 10px;
        background: transparent;

        @media (min-width: 700px) {
            height: 70px;
        }
    }

    input{
        color: ${props => props.theme.colors.primary};
        @media (min-width: 700px) {
            font-size: 20px;
        }
    }

    .sugestionsList{
        width: 100%;

        position: absolute;
        z-index: 999;

        background: ${props => props.theme.colors.secondary};
    }

    .sugestion{
        padding-left: 10px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;

        z-index: 9999999;

        border-bottom: ${props => `1px ${props.theme.colors.primary} solid`};

        cursor: pointer;

        &:hover{
            opacity: 0.3;
        }
    }
`