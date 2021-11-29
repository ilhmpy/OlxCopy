import styled from "styled-components";
import { Media } from '../../consts/Media';

type MediaBlockProps = {
    showMobile: boolean;
    view?: "flex" | "block" | "inline"; 
    showDesctop: boolean;
    flexOverflow?: boolean;
}

export const MediaBlock = styled.div<MediaBlockProps>`
    ${({ showMobile, showDesctop, view }) => {
        if (showMobile) {
            return `
                display: none;
                ${Media.Mobile} {
                    display: ${view ? view : "block"};
                }  
            `;
        };
        if (showDesctop) {
            return `
                display: ${view ? view : "block"};
                ${Media.Mobile} {
                    display: none;
                }  
            `;
        };
    }}
    ${({ flexOverflow }) => {
        if (flexOverflow) {
            return `

            `;
        };
    }}
`;