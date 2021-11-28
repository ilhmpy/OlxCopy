import styled from "styled-components";

type MediaBlockProps = {
    showMobile: boolean;
    view?: "flex" | "block" | "inline"; 
    showDesctop: boolean;
}

export const MediaBlock = styled.div<MediaBlockProps>`
    ${({ showMobile, showDesctop, view }) => {
        if (showMobile) {
            return `
                display: none;
                @media (max-width: 767px) {
                    display: ${view ? view : "block"};
                }  
            `;
        };
        if (showDesctop) {
            return `
                display: ${view ? view : "block"};
                @media (max-width: 767px) {
                    display: none;
                }  
            `;
        };
    }}
`;