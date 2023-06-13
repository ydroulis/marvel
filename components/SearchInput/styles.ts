import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    position: relative;

    form {
        width: 100%;
        border: ${props => `2px ${props.theme.colors.primary} solid`}; 
        border-radius: 10px;
        background: transparent;
    }

    input{
        color: ${props => props.theme.colors.primary};
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