import styled from "styled-components";
import { TextBox } from '../../components/textBox/index'

export {
    TextBox
}

export const BoldSpan = styled.span`
    font-weight: bold;
`

export const RightHandWrapper = styled.div`
    width: 600px;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width:1024px){
        max-width: 80vw;
        margin: auto;
        gap: 1.5em;
    }
`
