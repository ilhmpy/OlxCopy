import styled from "styled-components";

export const SearchBlock = styled.div`
    width: 100%;
    height: 72px;
    background: #fff;
    margin-top: 120px;
    margin-bottom: 40px;
`;

export const SearchInput = styled.input`
    width: 70%;
    height: inherit;
    display: block;
    padding-left: 60px;
    &::placeholder {
        color: #000;
        opacity: 80%;
    }
`;