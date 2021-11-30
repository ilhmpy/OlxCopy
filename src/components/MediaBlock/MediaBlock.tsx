import styled from "styled-components";
import { Media } from '../../consts/Media';

type MediaBlockProps = {
    view?: "flex" | "block" | "inline"; 
    showDesctop: boolean;
    showMobile: boolean;
    showTablet?: boolean;
    flexOverflow?: boolean;
}

export const MediaBlock = styled.div<MediaBlockProps>`
    ${({ showMobile, showDesctop, showTablet, view }) => {
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
        if (showTablet) {
            return `
                display: none;
                ${Media.Tablet} {
                    display: ${view ? view : "block"};
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