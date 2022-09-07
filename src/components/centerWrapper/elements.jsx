import styled from "styled-components";

export const CenterBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
    gap: 3em;
    max-width: 850px;
    margin: auto;

    @media (max-width: 1024px){
        flex-direction: column;
    }
`