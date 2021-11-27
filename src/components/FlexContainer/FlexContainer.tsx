import styled from "styled-components";

export const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 767px) {
       width: auto;
       margin: 0 auto;
    }
`;