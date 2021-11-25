import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1238px;
    height: inherit !important;
    margin: 0 auto;
    position: relative;
    @media (max-width: 767px) {
        max-width: 85%;
    }
`;