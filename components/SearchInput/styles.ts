import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;

    form {
        width: 100%;
        border: ${props => `2px ${props.theme.colors.primary} solid`}; 
        border-radius: 10px;
        background: transparent;
    }

    input{
        color: ${props => props.theme.colors.primary};
    }
`