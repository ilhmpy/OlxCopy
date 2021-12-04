import styled from "styled-components";
import { Media } from '../../consts/Media';

export const FlexContainer = styled.div<{ minHeight?: number; mobileMargin?: any; marginBottom?: number; }>`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : 0}px;
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