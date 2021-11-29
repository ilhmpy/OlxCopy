import styled from "styled-components";
import { Media } from '../../consts/Media';

export const FlexContainer = styled.div<{ minHeight?: number; mobileMargin?: any; }>`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    ${Media.Mobile} {
       width: auto; 
       justify-content: center;
    }
    ${({ minHeight }) => {
        if (minHeight) {
            return `
                min-height: ${minHeight}px;  
            `;
        };
    }}
`;