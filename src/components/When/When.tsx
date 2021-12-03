import styled from "styled-components";

export const When = styled.div<{ when: boolean; block?: string; }>`
    width: 100%;
    display: ${({ when, block }) => when ? (block ? block : "block") : "none"};
`;