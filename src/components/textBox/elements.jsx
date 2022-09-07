import styled from 'styled-components'

export const FlexTextBox = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background-color: rgba(182, 180, 180, 0.266);
    border-radius: 1em;
    border: 3px solid transparent;
    width: ${props => props.width};
    flex-basis: 25%;

    &:hover {
        cursor: pointer;
        border: 3px solid rgb(60, 60, 255);
    }

`
export const Paragraph = styled.p`
    max-height: 50%
`
export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
`

export const FontAwesomeIcon = styled.i`
    font-size: 2.5rem;
    padding: 1rem
`

export const TextArea = styled.div`
    text-align: left;
    width: 70%;
`

export const H2Link = styled.h2`
    margin-bottom: 0.2rem;
    font-size: 1.5rem
`

export const BlackA = styled.a`
    color:black;
    text-decoration: none;

    &:hover {
        color: rgb(60, 60, 255);
        text-decoration: underline;
    }
`