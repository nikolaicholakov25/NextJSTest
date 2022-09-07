import styled from "styled-components";

export const HeroBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    @media (max-width: 1024px){
        height: auto;
        gap: 2em;
    }
`