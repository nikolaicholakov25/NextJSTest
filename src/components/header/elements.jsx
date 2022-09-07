import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
    display: block;
    text-align: center;
    margin-top: 2em;

`

export const H1Header = styled.h1`
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
`