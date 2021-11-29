import styled from "styled-components";

export const FlexContainer = styled.div<{ minHeight?: number; mobileMargin?: any; }>`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 767px) {
       width: auto; 
       justify-content: center;
    }
    @media (max-width: 480px) {
       
    }
    ${({ minHeight }) => {
        if (minHeight) {
            return `
                min-height: ${minHeight}px;  
            `;
        };
    }}
`;