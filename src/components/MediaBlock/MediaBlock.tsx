import styled from "styled-components";

type MediaBlockProps = {
    showMobile: boolean;
    desctopDisplay?: "flex" | "block"; 
    showDesctop: boolean;
}

export const MediaBlock = styled.div<MediaBlockProps>`
    ${({ showMobile, showDesctop, desctopDisplay }) => {
        if (showMobile) {
            return `
                display: none;
                @media (max-width: 767px) {
                    display: block;
                }  
            `;
        };
        if (showDesctop) {
            return `
                display: ${desctopDisplay ? desctopDisplay : "block"};
                @media (max-width: 767px) {
                    display: none;
                }  
            `;
        };
    }}
`;